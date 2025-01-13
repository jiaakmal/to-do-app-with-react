import React, { useContext } from 'react';
import { TaskContext } from '../../UseContext/TaskContext';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';


const TaskList = () => {
  const { tasks, toggleCompleted, editTask, deleteTask } = useContext(TaskContext);

  return (
    <div>
      {tasks.length === 0 ? (
        <p className='no-items'>No items in the list</p>
      ) : (
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
      )}
    </div>
  );
};

export default TaskList;