import React, { useState } from 'react';
import Select from 'react-select';
import './pageCss/Team.css';

const Team = ({ onAddColleague }) => {
  const [colleagueName, setColleagueName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [colleagues, setColleagues] = useState([]);

  const handleProfileImageChange = (e, id = null) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (id === null) {
        setProfileImage(reader.result);
      } else {
        const updatedColleagues = colleagues.map(colleague =>
          colleague.id === id ? { ...colleague, img: reader.result } : colleague
        );
        setColleagues(updatedColleagues);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddColleague = () => {
    if (colleagueName) {
      const newColleague = {
        id: colleagues.length + 1,
        name: colleagueName,
        img: profileImage || '/images/default-avatar.jpg',
      };
      setColleagues([...colleagues, newColleague]);
      onAddColleague(newColleague);
      setColleagueName('');
      setProfileImage(null);
    }
  };

  const handleDeleteColleague = (id) => {
    const updatedColleagues = colleagues.filter(colleague => colleague.id !== id);
    setColleagues(updatedColleagues);
  };

  const colleagueOptions = colleagues.map(colleague => ({ value: colleague.id, label: colleague.name }));

  return (
    <div className="team-container">
      <h2>Manage Team</h2>
      <div className="add-colleague-form">
        <input
          type="text"
          placeholder="Enter colleague name"
          value={colleagueName}
          onChange={(e) => setColleagueName(e.target.value)}
          className="colleague-input"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleProfileImageChange(e)}
        />
        <button onClick={handleAddColleague}>Add Colleague</button>
      </div>
      <div className="colleague-list">
        {colleagues.map((colleague) => (
          <div key={colleague.id} className="colleague-item">
            <img src={colleague.img} alt={colleague.name} className="colleague-img" />
            <span>{colleague.name}</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleProfileImageChange(e, colleague.id)}
              className="change-photo-input"
            />
            <button onClick={() => handleDeleteColleague(colleague.id)} className="delete-btn">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
