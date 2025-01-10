import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

const EditTask = ({ task, index, editTask }) => {
  const [newTitle, setNewTitle] = useState(task.title);
  const [newCategory, setNewCategory] = useState(task.category);
  const [newDescription, setNewDescription] = useState(task.description);
//   const navigate = useNavigate();

  const handleEdit = () => {
    editTask(index, newTitle, newCategory, newDescription);
  };

  return (
    <div>
      <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Edit title" />
      <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="Edit category" />
      <textarea type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Edit description" />
      <button onClick={handleEdit}>Save</button>
    </div>
  );
};

export default EditTask;