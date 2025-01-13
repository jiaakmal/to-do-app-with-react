import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, category, description) => {
    setTasks([...tasks, { title, category, description, completed: false }]);
  };

  const toggleCompleted = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const editTask = (index, newTitle, newCategory, newDescription) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, title: newTitle, category: newCategory, description: newDescription } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleCompleted, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};