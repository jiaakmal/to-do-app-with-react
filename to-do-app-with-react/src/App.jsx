import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";
import DeleteTask from "./components/DeleteTask";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const addTask = (title, category, description) => {
    setTasks([...tasks, { title, category, description, completed: false }]);
  };

  const handleAddTask = () => {
    addTask(title, category, description);
    setTitle("");
    setCategory("");
    setDescription("");
  };

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
    <Router>
      <div className="to-do-container">
        <Header />
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
          <textarea
            type="text"
            id="description-input"
            placeholder="Enter description"
          />
          <button type="submit">Save Task</button>
        </form>
        <Routes>
          <Route
            path="/"
            element={
              <TaskList
                tasks={tasks}
                toggleCompleted={toggleCompleted}
                editTask={editTask}
                deleteTask={deleteTask}
              />
            }
          />
          <Route
            path="/edit/:index"
            element={<EditTask tasks={tasks} editTask={editTask} />}
          />
          <Route
            path="/delete/:index"
            element={<DeleteTask tasks={tasks} deleteTask={deleteTask} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
