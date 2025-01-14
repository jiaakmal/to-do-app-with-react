import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TaskContext } from '../../UseContext/TaskContext';


const EditTask = () => {
  const { tasks, editTask } = useContext(TaskContext);
  const { index } = useParams();
  const navigate = useNavigate();

  if (!tasks[index]) {
    return <div>Task not found</div>;
  }

  const task = tasks[index];
  const [newTitle, setNewTitle] = useState(task.title);
  const [newCategory, setNewCategory] = useState(task.category);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    editTask(index, newTitle, newCategory, newDescription);
    navigate('/tasks');
  };

  return (
    <div className='to-do-form-edit'>
      <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Edit title" />
      <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="Edit category" />
      <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Edit description" />
      <button onClick={handleEdit}>Save</button>
    </div>
  );
};

export default EditTask;