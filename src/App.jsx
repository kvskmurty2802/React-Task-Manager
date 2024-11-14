import { useEffect, useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from './utils/localStorage';
import './styles/styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setTasks(getTasksFromLocalStorage());
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const addTask = (title, priority) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false, priority }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskInput onAddTask={addTask} setSearchQuery={setSearchQuery} />
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onToggleComplete={toggleTaskCompletion} />
    </div>
  );
}

export default App;
