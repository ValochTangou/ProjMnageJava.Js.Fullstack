import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './pageCss/Project.css';

const Project = () => {
  const [colleagues, setColleagues] = useState([
    { id: 1, name: 'Reg', status: 'Not Started', img: '/images/img8.jpg' },
    { id: 2, name: 'Aurinelle', status: 'In Progress', img: '/images/img1.jpg' },
    { id: 3, name: 'Lesley', status: 'Blocked', img: '/images/img2.jpg' },
    { id: 4, name: 'Aureg', status: 'Completed', img: '/images/img3.jpg' },
  ]);

  const [availableColleagues, setAvailableColleagues] = useState([
    { id: 5, name: 'Cedrick', img: '/images/img4.jpg' },
    { id: 6, name: 'Jenny', img: '/images/img5.jpg' },
    { id: 7, name: 'Lise', img: '/images/img6.jpg' },
  ]);

  const [selectedColleagueId, setSelectedColleagueId] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Not Started');
  const [report, setReport] = useState(''); // State pour le rapport
  const [tasks, setTasks] = useState({}); // State pour les tâches accomplies par chaque collègue

  const statuses = ['Not Started', 'In Progress', 'Blocked', 'Completed'];
  const taskOptions = ['Write Unit Tests', 'Deploy Application', 'Refactor Code', 'Update Documentation', 'Fix Bugs', 'Code Review']; // Liste de tâches

  const moveColleague = (id, newStatus) => {
    setColleagues(colleagues.map(colleague =>
      colleague.id === id ? { ...colleague, status: newStatus } : colleague
    ));
  };

  const addColleague = () => {
    const colleagueToAdd = availableColleagues.find(col => col.id === parseInt(selectedColleagueId));
    if (colleagueToAdd) {
      setColleagues([...colleagues, { ...colleagueToAdd, status: selectedStatus }]);
      setAvailableColleagues(availableColleagues.filter(col => col.id !== colleagueToAdd.id));
      setSelectedColleagueId('');
    }
  };

  const removeColleague = (id) => {
    setColleagues(colleagues.filter(colleague => colleague.id !== id));
  };

  const toggleTaskCompletion = (colleagueId, task) => {
    setTasks({
      ...tasks,
      [colleagueId]: {
        ...(tasks[colleagueId] || {}),
        [task]: !((tasks[colleagueId] || {})[task])
      }
    });
  };

  const handleReportSubmit = () => {
    alert(`Report sent: ${report}`);
    setReport(''); // Efface le rapport après l'envoi
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="project-container">
        <h1>Project Board</h1>
        <div className="select-container">
          <select
            value={selectedColleagueId}
            onChange={(e) => setSelectedColleagueId(e.target.value)}
            className="select-input"
          >
            <option value="">Select a colleague</option>
            {availableColleagues.map(colleague => (
              <option key={colleague.id} value={colleague.id}>
                {colleague.name}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="select-input"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <button onClick={addColleague} className="add-button">Add Colleague</button>
        </div>

        <div className="task-board">
          {statuses.map(status => (
            <StatusColumn
              key={status}
              status={status}
              colleagues={colleagues.filter(colleague => colleague.status === status)}
              moveColleague={moveColleague}
              removeColleague={removeColleague}
              tasks={tasks}
              toggleTaskCompletion={toggleTaskCompletion}
              taskOptions={taskOptions}
            />
          ))}
        </div>

        <div className="report-section">
          <textarea
            value={report}
            onChange={(e) => setReport(e.target.value)}
            className="report-input"
            placeholder="Write a report here..."
          />
          <button onClick={handleReportSubmit} className="send-button">Send Report</button>
        </div>
      </div>
    </DndProvider>
  );
};

const StatusColumn = ({ status, colleagues, moveColleague, removeColleague, tasks, toggleTaskCompletion, taskOptions }) => {
  const [, drop] = useDrop({
    accept: 'colleague',
    drop: (item) => moveColleague(item.id, status),
  });

  return (
    <div className="status-column" ref={drop}>
      <h2>{status}</h2>
      {colleagues.map(colleague => (
        <Colleague
          key={colleague.id}
          colleague={colleague}
          removeColleague={removeColleague}
          tasks={tasks[colleague.id] || {}}
          toggleTaskCompletion={toggleTaskCompletion}
          taskOptions={taskOptions}
        />
      ))}
    </div>
  );
};

const Colleague = ({ colleague, removeColleague, tasks, toggleTaskCompletion, taskOptions }) => {
  const [, drag] = useDrag({
    type: 'colleague',
    item: { id: colleague.id },
  });

  return (
    <div className="colleague" ref={drag}>
      <span>{colleague.name}</span>
      <img src={colleague.img} alt={colleague.name} className="user-avatar" />
      <button onClick={() => removeColleague(colleague.id)} className="remove-button">Remove</button>

      {/* Tasks */}
      <div className="task-list">
        {taskOptions.map(task => (
          <div key={task} className="task-item">
            <input
              type="checkbox"
              checked={!!tasks[task]}
              onChange={() => toggleTaskCompletion(colleague.id, task)}
            />
            <label>{task}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
