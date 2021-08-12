import React, { useState, useEffect } from 'react'
import MomentUtils from '@date-io/moment';
import {
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';


import { AddTaskTextField, AddTaskContainer, AddTaskBtn, NoTasksHeading, TaskTable, ActionBtn, 
    DisplayTask,DisplayTaskDone, THead, Tr,TaskInfo }
     from './Tasks.elements';
import moment from 'moment';

export default function Tasks() {



    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    let initTasksArray;
    if (localStorage.getItem("tasks") === null) {
        initTasksArray = [];
    }
    else {
        initTasksArray = JSON.parse(localStorage.getItem("tasks"));
    }

    const [currentTask, setCurrentTask] = useState("")
    const [taskArray, setTaskArray] = useState(initTasksArray)
    const [selectedDate, setSelectedDate] = useState(moment().format("LLLL"));

    const handleDateChange = (e) => {
        // console.log(moment(e).format("LLLL"))    
        setSelectedDate(moment(e).format("LLLL"))
    }

    const handleTaskChange = (e) => {
        setCurrentTask(e.target.value)
    }

    const addTask = () => {
        let newTask = {
            id: taskArray.length === 0 ? 1 : taskArray[taskArray.length - 1].id + 1,
            taskName: currentTask,
            isEditing: false,
            isDone: false,
            schedule: selectedDate
        }

        setTaskArray([...taskArray, newTask])
        setCurrentTask("")
    }





    const doneTask = (task) => {
        setTaskArray(taskArray.map(element => {
            if (element.id === task.id) {
                element.isDone = true
            }
            return element
        }))

    }

    const UndoneTask = (task) => {
        setTaskArray(taskArray.map(element => {
            if (element.id === task.id) {
                element.isDone = false
            }
            return element
        }))

    }
    const deleteTask = (task) => {
        setTaskArray(taskArray.filter((element) => {
            return element !== task
        }))


    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskArray));
    }, [taskArray])
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
                                                            onClick={() => doneTask(task)}
                                                        >DONE</ActionBtn>
                                                            : <ActionBtn
                                                                variant="outlined"
                                                                color="default"
                                                                size="small"
                                                                onClick={() => UndoneTask(task)}
                                                            >UNDONE</ActionBtn>
                                                        }

                                                        <ActionBtn
                                                            variant="outlined"
                                                            color="secondary"
                                                            size="small"
                                                            onClick={() => deleteTask(task)}
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

