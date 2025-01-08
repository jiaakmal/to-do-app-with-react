import React, { useState } from 'react';
import TaskList from './components/TaskList';
import './App.css';

 function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleCompleted = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const editTask = (index, newText) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, text: newText } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="to-do-container">
      <div className="title">
        <h1>To Do List</h1>
        <p>Manage your work tasks here</p>
      </div>
      <form className="to-do-form" onSubmit={(e) => {
        e.preventDefault();
        const taskInput = e.target.elements['task-input'];
        if (taskInput.value) {
          addTask(taskInput.value);
          taskInput.value = '';
        } else {
          alert("Please enter a task");
        }
      }}>
        <input type="text" id="task-input" placeholder="Enter a task" />
        <button type="submit">+</button>
      </form>
      <TaskList 
        tasks={tasks} 
        toggleCompleted={toggleCompleted} 
        editTask={editTask} 
        deleteTask={deleteTask} 
      />
    </div>
  );
};

export default App;