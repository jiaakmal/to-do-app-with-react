import React, { useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if (taskInput) {
            setTasks([...tasks, { text: taskInput, completed: false }]);
            setTaskInput('');
        } else {
            alert("Please enter a task");
        }
    };

    const toggleCompleted = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    };

    return (
        <>
            <form className="to-do-form">
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Enter a task"
                />
                <button onClick={addTask}>+</button>
            </form>
            <ul className="task-list" >
                {tasks.map((task, index) => (
                    <li key={index} onClick={() => toggleCompleted(index)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        consol.log(task.text);
                        {task.text}
                    </li>
                ))}
            </ul>
        </>

    );
};

export default TaskList;