import { FaTrash, FaCheckCircle, FaRegCircle } from 'react-icons/fa';

function TaskItem({ task, onDelete, onToggleComplete }) {
  const priorityClass = task.priority.toLowerCase();

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`} priority={task.priority}>
      <div onClick={() => onToggleComplete(task.id)}>
        {task.completed ? <FaCheckCircle /> : <FaRegCircle />}
      </div>
      {/* <div className={`priority-dot ${priorityClass}`} /> */}
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>Priority: {task.priority}</p>
      </div>
      <button onClick={() => onDelete(task.id)}><FaTrash /></button>
    </div>
  );
}

export default TaskItem;
