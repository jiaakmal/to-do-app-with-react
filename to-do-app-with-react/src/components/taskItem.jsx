import React, { useState } from 'react';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import editImg from '../assets/images/edit.png'

const TaskItem = ({ task, index, toggleCompleted, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      <div className="taskItem">
        {isEditing ? (
          <EditTask
            task={task}
            index={index}
            editTask={(index, newTitle, newCategory, newDescription) => {
              editTask(index, newTitle, newCategory, newDescription);
              setIsEditing(false);
            }}
          />
        ) : (
          <div className={`task ${task.completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              className="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(index)}
            />
            <h3>Task Title: {task.title}</h3>
            <p>Category: {task.category}</p>
            <p>Description: {task.description}</p>
            <div className="icons">
              <img
                src={editImg}
                alt="Edit"
                onClick={() => setIsEditing(true)}
              />
              <DeleteTask task={task} index={index} deleteTask={deleteTask} />
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default TaskItem;