import React, { useState } from 'react';
import './pageCss/Project.css';

const initialTasks = [
  { id: 1, title: 'Task 1', status: 'Not Started', assignedTo: 'Reg' },
    { id: 2, title: 'Task 2', status: 'In Progress', assignedTo: 'Aurinelle' },
    { id: 4, title: 'Task 4', status: 'Blocked', assignedTo: 'Aureg' },
    { id: 3, title: 'Task 3', status: 'Completed', assignedTo: 'Lesley' },
];

const colleagues = [
  { id: 1, name: 'Reg', img: '/images/img8.jpg' },
  { id: 2, name: 'Aurinelle', img: '/images/img1.jpg' },
  { id: 3, name: 'Lesley', img: '/images/img2.jpg' },
  { id: 4, name: 'Aureg', img: '/images/img3.jpg' },
];

function Project() {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedTask, setDraggedTask] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDrop = (newStatus) => {
    if (draggedTask) {
      const isUserAlreadyAssigned = tasks.some(
        (task) => task.assignedTo === draggedTask.assignedTo && task.status === newStatus
      );

      if (!isUserAlreadyAssigned) {
        setTasks(tasks.map((task) =>
          task.id === draggedTask.id ? { ...task, status: newStatus } : task
        ));
      } else {
        alert(`${draggedTask.assignedTo} has already been assigned to a task in the "${newStatus}" column.`);
      }
      setDraggedTask(null);
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleAddColleague = (newColleague) => {
    if (newColleague) {
      const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1, // Generate a unique ID
        title: `Task ${tasks.length + 1}`,
        status: 'Not Started',
        assignedTo: newColleague,
      };
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <div className="project-container">
      <h1>Project Management Board</h1>

      <div className="task-board">
        {['Not Started', 'In Progress', 'Blocked', 'Completed'].map((status) => (
          <div
            key={status}
            className="status-column"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(status)}
          >
            <h2>{status}</h2>
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div
                  key={task.id}
                  className="task"
                  draggable
                  onDragStart={() => handleDragStart(task)}
                >
                  <p>{task.title}</p>
                  <div className="task-assigned-to">
                    {colleagues.find((c) => c.name === task.assignedTo) && (
                      <img
                        src={colleagues.find((c) => c.name === task.assignedTo).img}
                        alt={task.assignedTo}
                        className="user-avatar"
                        onClick={() => handleUserClick(task.assignedTo)}
                      />
                    )}
                    <span>{task.assignedTo}</span>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>

      <div className="add-colleague">
        <h3>Add Colleague</h3>
        <select onChange={(e) => handleAddColleague(e.target.value)}>
          <option value="">Select colleague</option>
          {colleagues.map((colleague) => (
            <option key={colleague.id} value={colleague.name}>
              {colleague.name}
            </option>
          ))}
        </select>
      </div>

      {selectedUser && (
        <div className="user-details">
          <h2>Selected User: {selectedUser}</h2>
          <p>Tasks assigned to {selectedUser}:</p>
          <ul>
            {tasks
              .filter((task) => task.assignedTo === selectedUser)
              .map((task) => (
                <li key={task.id}>{task.title} - {task.status}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Project;
