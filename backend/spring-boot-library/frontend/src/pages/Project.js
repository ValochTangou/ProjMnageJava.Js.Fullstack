import React, { useState } from "react";
import './pageCss/Project.css';

const initialTasks = [
  { id: 1, title: "Setup environment", status: "Not Started" },
  { id: 2, title: "Develop login page", status: "In Progress" },
  { id: 3, title: "Test user flows", status: "Completed" },
  { id: 4, title: "Prepare project documentation", status: "Not Started" },
];

const users = [
  { id: 1, name: "Reg", avatar: "src" },
  { id: 2, name: "Aurinelle", avatar: "" },
  { id: 3, name: "Lesley", avatar: "h" },
];

const statuses = ["Not Started", "In Progress", "Completed", "Blocked"];

const Project = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedUser, setDraggedUser] = useState(null);

  const onDragStart = (user) => {
    setDraggedUser(user);
  };

  const onDrop = (taskId) => {
    if (draggedUser) {
      alert(`Assigning ${draggedUser.name} to task ID: ${taskId}`);
      setDraggedUser(null); // Reset after drop
    }
  };

  return (
    <div className="project-container">
      <h1 className="project-title">Project Management</h1>
      <div className="users-section">
        <h2>Colleagues</h2>
        <div className="users-list">
          {users.map((user) => (
            <div
              key={user.id}
              className="user-avatar"
              draggable
              onDragStart={() => onDragStart(user)}
            >
              <img src={user.avatar} alt={user.name} />
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="tasks-board">
        {statuses.map((status) => (
          <div key={status} className="task-column">
            <h3>{status}</h3>
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div
                  key={task.id}
                  className="task-item"
                  onDrop={() => onDrop(task.id)}
                  onDragOver={(e) => e.preventDefault()}
                >
                  {task.title}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
