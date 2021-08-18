import React, { useState, useEffect } from 'react'
import MomentUtils from '@date-io/moment';
import {
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import Progress from "./Progress"

import {
    AddTaskTextField, AddTaskContainer, AddTaskBtn, NoTasksHeading, TaskTable, ActionBtn,
    DisplayTask, DisplayTaskDone, THead, Tr, TaskInfo, Level, Content, InnerContainer
}
    from './Tasks.elements';
import moment from 'moment';
import { useAuth } from "../context/AuthContext";
import db from '../context/firebase';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Tasks() {

    const dbRef = db.firestore().collection('users')
    const fetchTasks = async () => {
        const snapshot = await dbRef.doc(currentUser.uid).collection("tasks").orderBy('id').get()
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return data
    }

    const fetchStats = async () => {
        const prevLevel = await dbRef.doc(currentUser.uid).get()
        const { level, progress, totalTasks } = prevLevel.data()
        console.log(level,progress,totalTasks)
        return { prevLev: level, prevProgress: progress, prevTotalTasks: totalTasks }
    }

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTaskArray(tasksFromServer)
        }

        const getStats = async () => {
            const { prevLev, prevProgress, prevTotalTasks } = await fetchStats()
            setTotalTasks(prevTotalTasks)
            setLevel(prevLev)
            setProgress(prevProgress)
        }
        getStats()
        getTasks()
    }, [])




    const [currentTask, setCurrentTask] = useState("")
    const [taskArray, setTaskArray] = useState([])
    const [selectedDate, setSelectedDate] = useState(moment().format("LLLL"));
    const [progress, setProgress] = useState(0)
    const [level, setLevel] = useState(0)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [totalTasks, setTotalTasks] = useState(0)


    const handleDateChange = (e) => {

        setSelectedDate(moment(e).format("LLLL"))
    }

    const handleTaskChange = (e) => {
        setCurrentTask(e.target.value)
    }

    const { currentUser } = useAuth()

    const addTask = async () => {
        let flag = false, taskID;
        const test = await dbRef.get()
        test.docs.forEach(doc => {
            if (doc.id === currentUser.uid) {
                flag = true
            }
        })

        if (flag) {

            const tasksRef = dbRef.doc(currentUser.uid).collection('tasks')
            const prevTasks = await tasksRef.orderBy('id', 'desc').limit(1).get()

            if (prevTasks.docs[0]) {
                taskID = prevTasks.docs[0].data().id + 1
            }
            else {
                taskID = 1
            }
        }
        else {
            await dbRef.doc(currentUser.uid).set({ level: 0, progress: 0, totalTasks: 0 })
            taskID = 1
        }
        let newTask = {
            id: taskID,
            taskName: currentTask,
            isDone: false,
            schedule: selectedDate.toString()
        }
        await dbRef.doc(currentUser.uid).collection('tasks').doc().set(newTask)

        setTaskArray([...taskArray, newTask])
        setCurrentTask("")
    }


    const doneTask = async (taskId) => {
        const taskToMarkAsDone = (await dbRef.doc(currentUser.uid).collection("tasks").where("id", "==", taskId).get()).docs[0].ref
        taskToMarkAsDone.update({
            isDone: true
        })

        let dbLevel = level, dbProgress = progress , dbTotalTasks 
        if (progress === 80) {
            setLevel((prevLevel) => {
                dbLevel = prevLevel + 1
                return dbLevel

            })
            setProgress(0)
            dbProgress = 0
        }
        else {

            setProgress((prevProgress) => {
                dbProgress = prevProgress + 20
                return dbProgress
            })

        }
        setTotalTasks( (prevTotalTasks) => {
            dbTotalTasks = prevTotalTasks + 1
            return dbTotalTasks
        })
        await dbRef.doc(currentUser.uid).update({ level: dbLevel, progress: dbProgress , totalTasks : dbTotalTasks })        
        setTotalTasks(dbTotalTasks)
        setTaskArray(taskArray.map(element => {
            if (element.id === taskId) {
                element.isDone = true
            }
            return element
        }))

    }

    const UndoneTask = async (taskId) => {
        const taskToMarkAsUndone = (await dbRef.doc(currentUser.uid).collection("tasks").where("id", "==", taskId).get()).docs[0].ref
        taskToMarkAsUndone.update({
            isDone: false
        })

        let dbLevel = level, dbProgress = progress , dbTotalTasks 
        if (progress === 0) {
            setLevel((prevLevel) => {
                if (prevLevel === 1) {
                    dbLevel = 0
                    dbProgress = 80
                    setProgress(80)
                    return dbLevel
                }
                else if (prevLevel === 0 && progress === 20) {
                    dbLevel = 0
                    dbProgress = 0
                    setProgress(0)
                    return dbLevel
                }
                else if (prevLevel === 0 && progress === 0) {
                    dbLevel = 0
                    dbProgress = 0
                    setProgress(0)
                    return dbLevel
                }
                else {
                    dbLevel = prevLevel - 1
                    dbProgress = 80
                    setProgress(80)
                    return dbLevel
                }
            })
        }
        else {
            setProgress((prevProgress) => {
                dbProgress = prevProgress - 20
                return dbProgress
            })
        }
        setTotalTasks( (prevTotalTasks) => {
            if(prevTotalTasks <= 0){
                dbTotalTasks = 0
            }
            else{
                dbTotalTasks = prevTotalTasks - 1
            }
         
            return dbTotalTasks
        })
        await dbRef.doc(currentUser.uid).update({ level: dbLevel, progress: dbProgress , totalTasks : dbTotalTasks})
        setTotalTasks(dbTotalTasks)

        setTaskArray(taskArray.map(element => {
            if (element.id === taskId) {
                element.isDone = false
            }
            return element
        }))

    }
    const deleteTask = async (taskId) => {
        await (await dbRef.doc(currentUser.uid).collection("tasks").where("id", "==", taskId).get()).docs[0].ref.delete()
        setTaskArray(taskArray.filter((element) => {
            return element.id !== taskId
        }))
    }

    const handleDialogClose = () => {
        setDialogOpen(false)
    }

    const handleDialogOpen = () => {
        setDialogOpen(true)
    }

    const resetData = async ()=>{
        await dbRef.doc(currentUser.uid).update({ level: 0, progress: 0 , totalTasks : 0})
        setTotalTasks(0)
        setLevel(0)
        setProgress(0)
        setDialogOpen(false)
    }
    return (
        <>
            <Content>
                <AddTaskContainer >
                    <AddTaskTextField
                        label="Enter task here"
                        variant="filled"
                        value={currentTask}
                        onChange={handleTaskChange}
                    />


                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <DateTimePicker label="Schedule"
                            inputVariant="outlined" value={selectedDate} onChange={handleDateChange} />
                    </MuiPickersUtilsProvider>

                    <AddTaskBtn variant="contained" color="primary"
                        onClick={addTask} disabled={currentTask === ""} >
                        ADD
                    </AddTaskBtn>
                </AddTaskContainer>
                {taskArray.length > 0 ?
                    <TaskTable >
                        <THead>
                            <tr>
                                <th>Task</th>
                                <th>Action</th>
                            </tr>
                        </THead>
                        {
                            taskArray.map((task) => {
                                return (
                                    <tbody key={task.id}>
                                        <Tr>
                                            <td>
                                                <TaskInfo>
                                                    {
                                                        task.isDone ? (
                                                            <DisplayTaskDone>
                                                                <h3><s>{task.taskName}</s></h3>
                                                                <p><s>{task.schedule}</s></p>
                                                            </DisplayTaskDone>
                                                        ) : (
                                                            <DisplayTask>
                                                                <h3>{task.taskName}</h3>
                                                                <p>{task.schedule}</p>
                                                            </DisplayTask>

                                                        )}
                                                </TaskInfo>
                                            </td>
                                            <td>
                                                {
                                                    (
                                                        <>
                                                            {!task.isDone ? <ActionBtn
                                                                variant="outlined"
                                                                color="default"
                                                                size="small"
                                                                onClick={() => doneTask(task.id)}
                                                            >DONE</ActionBtn>
                                                                : <ActionBtn
                                                                    variant="outlined"
                                                                    color="default"
                                                                    size="small"
                                                                    onClick={() => UndoneTask(task.id)}
                                                                >UNDONE</ActionBtn>
                                                            }

                                                            <ActionBtn
                                                                variant="outlined"
                                                                color="secondary"
                                                                size="small"
                                                                onClick={() => deleteTask(task.id)}
                                                            >DELETE</ActionBtn>
                                                        </>
                                                    )

                                                }
                                            </td>
                                        </Tr>

                                    </tbody>
                                )
                            })
                        }
                    </TaskTable>
                    : <NoTasksHeading> NO TASKS TO DO </NoTasksHeading>
                }
            </Content>
            <Level >

                <h3 style={{ textAlign: "center" }}>Level {level}</h3>
                <h3>Total Tasks Completed : {totalTasks}</h3>

                <Progress value={progress} />
                <Button variant="contained" color="primary" onClick={handleDialogOpen}>
                    Reset Stats
                </Button>

            </Level>

            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Reset Level"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure ? this will reset your levels and total tasks done
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        No
                    </Button>
                    <Button onClick={resetData} color="secondary">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

        </>

    )
}

