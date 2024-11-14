import { useState } from 'react';

function TaskInput({ onAddTask, setSearchQuery }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleAddTask = () => {
    if (title.trim()) {
      onAddTask(title, priority);
      setTitle('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default TaskInput;
