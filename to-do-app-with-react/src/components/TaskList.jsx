import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleCompleted, editTask, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          index={index} 
          toggleCompleted={toggleCompleted} 
          editTask={editTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;