import React, { useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const addTask = (title, category, description) => {
    setTasks([...tasks, { title, category, description, completed: false }]);
  };

  // const handleAddTask = () => {
  //   addTask(title, category, description);
  //   setTitle("");
  //   setCategory("");
  //   setDescription("");
  // };

  const toggleCompleted = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const editTask = (index, newTitle, newCategory, newDescription) => {
    const newTasks = tasks.map((task, i) =>
      i === index
        ? {
            ...task,
            title: newTitle,
            category: newCategory,
            description: newDescription,
          }
        : task
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

      <form
        className="to-do-form"
        onSubmit={(e) => {
          e.preventDefault();
          const titleInput = e.target.elements["title-input"];
          const categoryInput = e.target.elements["category-input"];
          const descriptionInput = e.target.elements["description-input"];

          if (
            titleInput.value &&
            categoryInput.value &&
            descriptionInput.value
          ) {
            addTask(
              titleInput.value,
              categoryInput.value,
              descriptionInput.value
            );
            titleInput.value = "";
            categoryInput.value = "";
            descriptionInput.value = "";
          } else {
            alert("Please enter all fields");
          }
        }}
      >
        <input type="text" id="title-input" placeholder="Enter title" />
        <input type="text" id="category-input" placeholder="Enter category" />
        <input
          type="text"
          id="description-input"
          placeholder="Enter description"
        />
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
}

export default App;
