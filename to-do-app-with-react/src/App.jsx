import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TaskList from './components/TaskList';
import EditTask from './components/EditTask';
import DeleteTask from './components/DeleteTask';
import './App.css';
import Header from './components/Header';
import { TaskProvider } from './components/TaskContext';

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="to-do-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/edit/:index" element={<EditTask />} />
            <Route path="/delete/:index" element={<DeleteTask />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;