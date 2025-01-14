import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TaskContext } from '../../UseContext/TaskContext';
import './Home.css';

const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
});

const Home = () => {
  const { addTask } = useContext(TaskContext);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data) => {
    addTask(data.title, data.category, data.description);
    reset();
  };

  return (
    <div>
      <form className="to-do-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('title')}
          placeholder="Enter title"
        />
        {errors.title && <div className="error">{errors.title.message}</div>}
        
        <input
          type="text"
          {...register('category')}
          placeholder="Enter category"
        />
        {errors.category && <div className="error">{errors.category.message}</div>}
        
        <textarea
          {...register('description')}
          placeholder="Enter description"
        />
        {errors.description && <div className="error">{errors.description.message}</div>}
        
        <button type="submit">Save Task</button>
      </form>
      <Link to="/tasks">View Tasks</Link>
    </div>
  );
};

export default Home;