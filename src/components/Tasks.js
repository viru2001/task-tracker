import React, { useState, useEffect } from 'react'
import MomentUtils from '@date-io/moment';
import {
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';


import {
    AddTaskTextField, AddTaskContainer, AddTaskBtn, NoTasksHeading, TaskTable, ActionBtn,
    DisplayTask, DisplayTaskDone, THead, Tr, TaskInfo
}
    from './Tasks.elements';
import moment from 'moment';
import { useAuth } from "../context/AuthContext";
import db from '../context/firebase';



export default function Tasks() {

    const dbRef = db.firestore().collection('users')
    const fetchTasks = async () => {
        const snapshot = await dbRef.doc(currentUser.uid).collection("tasks").get()
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return data
    }

    useEffect(() => {
        const getTasks = async() => {
            const tasksFromServer = await fetchTasks()
            setTaskArray(tasksFromServer)
        }
        getTasks()
    }, [])

  

    const [currentTask, setCurrentTask] = useState("")
    const [taskArray, setTaskArray] = useState([])
    const [selectedDate, setSelectedDate] = useState(moment().format("LLLL"));

    const handleDateChange = (e) => {
        console.log(e)
        setSelectedDate(moment(e).format("LLLL"))
    }

    const handleTaskChange = (e) => {
        setCurrentTask(e.target.value)
    }

    const { currentUser } = useAuth()

    const addTask = async() => {
        let flag = false,taskID;
        const test = await dbRef.get()
        test.docs.forEach(doc => {
            if(doc.id === currentUser.uid){
                flag = true
            } 
        })

        if(flag){
            
            const tasksRef = dbRef.doc(currentUser.uid).collection('tasks')
            const prevTasks = await tasksRef.orderBy('id', 'desc').limit(1).get()
            
            if(prevTasks.docs[0]){
            taskID = prevTasks.docs[0].data().id + 1
            }
            else{
                taskID = 1
            }       
        }
        else{
            await dbRef.doc(currentUser.uid).set({dummy : 'dummy'})
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


    const doneTask = async(taskId) => {
        const taskToMarkAsDone =   (await dbRef.doc(currentUser.uid).collection("tasks").where("id","==",taskId).get()).docs[0].ref
        taskToMarkAsDone.update({
            isDone : true
        })

        setTaskArray(taskArray.map(element => {
            if (element.id === taskId) {
                element.isDone = true
            }
            return element
        }))

    }

    const UndoneTask = async(taskId) => {
        const taskToMarkAsDone =   (await dbRef.doc(currentUser.uid).collection("tasks").where("id","==",taskId).get()).docs[0].ref
        taskToMarkAsDone.update({
            isDone : false
        })
        setTaskArray(taskArray.map(element => {
            if (element.id === taskId) {
                element.isDone = false
            }
            return element
        }))

    }
    const deleteTask = async(taskId) => {   
        await (await dbRef.doc(currentUser.uid).collection("tasks").where("id","==",taskId).get()).docs[0].ref.delete()
        setTaskArray(taskArray.filter((element) => {
            return element.id !== taskId
        }))
    }

    return (
        <>
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
        </>

    )
}

