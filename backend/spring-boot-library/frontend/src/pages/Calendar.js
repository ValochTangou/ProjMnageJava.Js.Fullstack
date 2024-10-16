import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import du style pour le calendrier
import './pageCss/Calendar.css';

const colleagues = ['Reg', 'Aurinelle', 'Lesley'];

const Calendar = () => {
  const [absences, setAbsences] = useState(colleagues.map(colleague => ({ name: colleague, dates: [] })));
  const [newColleague, setNewColleague] = useState('');
  const [selectedDates, setSelectedDates] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showAllAbsences, setShowAllAbsences] = useState(false);

  const handleAddAbsence = () => {
    if (newColleague.trim() !== '' && selectedDates.length > 0) {
      if (editing) {
        let updatedAbsences = [...absences];
        updatedAbsences[editIndex] = { name: newColleague, dates: selectedDates };
        setAbsences(updatedAbsences);
        setEditing(false);
        setEditIndex(null);
      } else {
        setAbsences([...absences, { name: newColleague, dates: selectedDates }]);
      }
      setNewColleague('');
      setSelectedDates([]);
    }
  };

  const handleEditAbsence = (index) => {
    setNewColleague(absences[index].name);
    setSelectedDates(absences[index].dates);
    setEditing(true);
    setEditIndex(index);
  };

  const handleShowAbsences = () => {
    setShowAllAbsences(!showAllAbsences);
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <h1 className="title">Absences Calendar</h1>
        <div className="current-date">
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>

        <div className="absences-section">
          <h2>Colleagues' Absences</h2>
          {showAllAbsences ? (
            <ul className="absence-list">
              {absences.map((absence, index) => (
                <li key={index}>
                  <strong>{absence.name}</strong>: {absence.dates.length > 0 ? absence.dates.join(', ') : 'No dates selected'}
                  <button
                    className="edit-btn"
                    onClick={() => handleEditAbsence(index)}>
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="add-absence">
          <input
            type="text"
            placeholder="Enter colleague's name"
            value={newColleague}
            onChange={(e) => setNewColleague(e.target.value)}
            className="absence-input"
          />
          <DatePicker
            selected={selectedDates[0]}
            onChange={(dates) => setSelectedDates(dates)}
            startDate={selectedDates[0]}
            endDate={selectedDates[1]}
            selectsRange
            inline
          />
          <button className="submit-btn" onClick={handleAddAbsence}>
            {editing ? 'Modify' : 'Submit'}
          </button>
        </div>

        <button className="show-all-btn" onClick={handleShowAbsences}>
          {showAllAbsences ? 'Hide All Absences' : 'Show All Absences'}
        </button>
      </div>
    </div>
  );
};

export default Calendar;
