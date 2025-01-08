import React from "react";
import binImg  from "../assets/images/bin.png";
import  editImg from "../assets/images/edit.png";

const TaskItem = ({ task, index, toggleCompleted, editTask, deleteTask }) => {
    return (
        <li>
            <div className="taskItem">
                <div className={`task ${task.completed ? "completed" : ""} `}>
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={task.completed}
                        onChange={() => toggleCompleted(index)}
                    />
                    <p>{task.text}</p>
                </div>

                <div className="icons">
                    <img
                        src={editImg}
                        alt="Edit"
                        onClick={() => {
                            const newText = prompt("Edit task:", task.text);
                            if (newText) {
                                editTask(index, newText);
                            }
                        }}
                    />
                    <img src={binImg} alt="Delete" onClick={() => deleteTask(index)} />
                </div>
            </div>
        </li>
    );
};

export default TaskItem;
