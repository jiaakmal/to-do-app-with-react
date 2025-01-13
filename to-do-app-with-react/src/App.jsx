import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import TaskList from './components/TaskList/TaskList';
import EditTask from './components/EditTask/EditTask';
import DeleteTask from './components/DeleteTask/DeleteTask';
import './App.css';
import Header from './components/Header/Header';
import { TaskProvider } from '../src/UseContext/TaskContext';
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