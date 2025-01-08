import './App.css'
import TaskList from './components/TaskList';

function App() {
  

  return (
   
    <div className="to-do-container">
    <div className="title">
      <h1>To Do List</h1>
      <p>Manage yor work tasks here</p>
    </div>
    <TaskList/>
  </div>
      
  );
}

export default App