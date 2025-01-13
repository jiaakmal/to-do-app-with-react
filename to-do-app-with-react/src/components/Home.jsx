import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from './TaskContext';

const Home = () => {
  const { addTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title && category && description) {
      addTask(title, category, description);
      setTitle('');
      setCategory('');
      setDescription('');
    } else {
      alert("Please enter all fields");
    }
  };

  return (
    <div>
      <form className="to-do-form" onSubmit={handleAddTask}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
        <button type="submit">Save Task</button>
      </form>
      <Link to="/tasks">View Tasks</Link>
    </div>
  );
};

export default Home;