import React, { useState } from 'react';

const TODOLIST = () => {
    const [tasks, setTasks] = useState('');
    const [todo, setTodo] = useState([]);

    const addChange = (e) => {
        setTasks(e.target.value);
    };

    const addTask = () => {
        if (tasks.trim() !== '') {
            setTodo([...todo, tasks]);
            setTasks('');
        }
    };

    const deleteTask = (index) => {
        setTodo(todo.filter((_, i) => i !== index));
    };

    return (
        <>
            <input 
                type='text' 
                value={tasks}  
                placeholder='Enter your task' 
                onChange={addChange}
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {todo.map((task,index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TODOLIST;
