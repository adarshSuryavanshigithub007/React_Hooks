import React, { useReducer, useState } from 'react'
import './Todo.css'
import { type } from '@testing-library/user-event/dist/type'
import { todoReducer } from './useReducer'
import { Checkbox } from '@mui/material'
const Todolist = () => {
    const [tasks,dispatch]=useReducer(todoReducer,[])
//  const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    console.log(tasks)
    const handleChangeTask = (e) => {
        setNewTask(e.target.value)
    }

    const addNewTask = () => {
        if (newTask.trim() !== '') {
            dispatch({type:"ADD TASK",payload:newTask.trim() })
            setNewTask('')
        }

    }
    const deleteTodo = (taskindex) => {
        // setTasks((prevTask) => prevTask.filter((_, index) => index !== taskindex))
        dispatch({type:"DELETE TASK",payload:taskindex})

    }
    return (
        <div className="app">
            <h1 className='h1'>MY TODO-LIST</h1>
            <div className="input-container">
                <input type="text" onChange={handleChangeTask} value={newTask} placeholder="New Task" />
                <button onClick={addNewTask}>Add</button>
            </div>
            <ul className="todo-list">
                {tasks.map((eachTask, index) => (
                    <li key={index}>
                      
                      <Checkbox/> 
                     
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todolist