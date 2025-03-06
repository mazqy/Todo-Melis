import React, { useState } from "react"
import deleteIcon from "./assets/icons/trash.svg"
import arrowIcon from "./assets/icons/caret-up.svg"
import "./todo-list-style.css"
export default function TodoList() {

    const [tasks, setTasks] = useState([])

    
    function addTask() {
        if (document.getElementById('taskInput').value.trim() !== '') {
            const newTask = document.getElementById('taskInput').value
            document.getElementById('taskInput').value = ''
            setTasks(t => [...t, newTask])
        }

    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }


    function taskUp(index) {
        const updatedTasks = [...tasks]
        if (index > 0){
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]]
            setTasks(updatedTasks)
        }
        
    }

    function taskDown(index) {
        const updatedTasks = [...tasks]
        if (index < tasks.length - 1){
            [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]]
            setTasks(updatedTasks)
        }
    }

    return (
        <div className="todoList">
            <h1>Todo List</h1>
            <div className="taskInputContainer">
                <input type="text" id="taskInput" className="taskInput" placeholder="Enter a task" />
                <button className="addButton" onClick={addTask} >Add</button>
            </div>

            <ol className="taskList">
                {tasks.map((task, index) =>
                    <div className="taskContainer">
                        <li className="task" key={index}>
                            <span>{task}</span>


                            <div className="arrows">
                                <img onClick={() => taskUp(index)} src={arrowIcon} />
                                <img onClick={() => taskDown(index)} src={arrowIcon} />
                            </div>

                        </li>
                        <button className="deleteButton" onClick={() => deleteTask(index)}>
                            <img src={deleteIcon} />
                        </button>
                    </div>

                )}
            </ol>
        </div>
    )
}