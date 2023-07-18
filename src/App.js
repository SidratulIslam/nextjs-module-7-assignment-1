import React, { useState } from 'react';
import './App.css';

function TaskInput({ onAddTask }) {
    const [task, setTask] = useState('');

    const handleTaskChange = (event) => {
        setTask(event.target.value);
    };

    const handleAddTask = () => {
        if (task !== '') {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <div className="task-input">
            <input type="text" value={task} onChange={handleTaskChange} />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

function TaskList({ tasks, onRemoveTask }) {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => onRemoveTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

function App() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    };

    const handleRemoveTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-app">
            <h1>To-Do List</h1>
            <TaskInput onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} />
        </div>
    );
}

export default App;
