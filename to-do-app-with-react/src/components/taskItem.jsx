import React from "react";
import { useState } from "react";
import binImg from "../assets/images/bin.png";
import editImg from "../assets/images/edit.png";

const TaskItem = ({ task, index, toggleCompleted, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newCategory, setNewCategory] = useState(task.category);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    editTask(index, newTitle, newCategory, newDescription);
    setIsEditing(false);
  };
  return (

    <li>
      <div className="taskItem">

      {isEditing ? (
          <div>
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
            <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
            <button onClick={handleEdit}>Save edit task</button>
          </div>
        ) :
        (<div className={`task ${task.completed ? "completed" : ""} `}>
          <input
            type="checkbox"
            className="checkbox"
            checked={task.completed}
            onChange={() => toggleCompleted(index)}
          />
          <h3>Title: {task.title}</h3>
          <p>Category: {task.category}</p>
          <p>Description: {task.description}</p>
        </div>
        )
    }

        <div className="icons">
          <img
            src={editImg}
            alt="Edit"
            onClick={() => {
                setIsEditing(true);
                setNewTitle(task.title);
                setNewCategory(task.category);
                setNewDescription(task.description);

  
            }}
          />
          <img src={binImg} alt="Delete" onClick={() => deleteTask(index)} />
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
