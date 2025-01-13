import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteTask from '../DeleteTask/DeleteTask';
import './TaskItem.css';
import editImg from '../../assets/images/edit.png';

const TaskItem = ({ task, index, toggleCompleted, deleteTask }) => {
  const navigate = useNavigate();

  return (
    <li>
      <div className="taskItem">
        <div className={`task ${task.completed ? "completed" : ""}`}>
          <input
            type="checkbox"
            className="checkbox"
            checked={task.completed}
            onChange={() => toggleCompleted(index)}
          />
          <h3>{task.title}</h3>
          <p>{task.category}</p>
          <p>{task.description}</p>
          <div className="icons">
            <img
              src={editImg}
              alt="Edit"
              onClick={() => navigate(`/edit/${index}`)}
            />
            <DeleteTask index={index} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;