import React, { useState } from 'react';
import './pageCss/Ticket.css';

const Ticket = ({ user, tasks }) => {
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [report, setReport] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleTaskCheck = (taskId) => {
    setCheckedTasks(prev => prev.includes(taskId)
      ? prev.filter(id => id !== taskId)
      : [...prev, taskId]);
  };

  const handleReportChange = (e) => setReport(e.target.value);

  const handleEditClick = () => setIsEditing(true);

  const handleSendClick = () => {
    alert(`Report sent for ${user.name}:\n${report}`);
    setIsEditing(false);
  };

  return (
    <div className="ticket-container">
      <div className="ticket-user">
        <img src={user.img} alt={user.name} className="ticket-avatar" />
        <h3>{user.name}</h3>
      </div>
      <div className="ticket-details">
        <h4>Tasks assigned to {user.name}:</h4>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className={`ticket-task ${task.status.toLowerCase().replace(' ', '-')}`}>
              <input
                type="checkbox"
                checked={checkedTasks.includes(task.id)}
                onChange={() => handleTaskCheck(task.id)}
              />
              {task.title} - <strong>{task.status}</strong>
            </li>
          ))}
        </ul>
        <div className="ticket-report">
          <h4>Task Report for {user.name}</h4>
          {isEditing ? (
            <textarea value={report} onChange={handleReportChange} />
          ) : (
            <p>{report || 'No report yet.'}</p>
          )}
          <div className="ticket-buttons">
            {isEditing ? (
              <button onClick={handleSendClick} className="send-button">Send Report</button>
            ) : (
              <button onClick={handleEditClick} className="edit-button">Edit Report</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
