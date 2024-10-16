import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change d'image toutes les 4 secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle
  }, [images.length]);

  return (
    <div className="main-page">
      <nav className="main-navbar">
        <ul className="main-navbar-list">
                  <li className="main-navbar-item"><Link to="/tasker">Tasker</Link></li>
                  <li className="main-navbar-item"><Link to="/overview">Overview</Link></li>
                  <li className="main-navbar-item"><Link to="/project">Project</Link></li>
                  <li className="main-navbar-item"><Link to="/team">Team</Link></li>
                  <li className="main-navbar-item"><Link to="/calendar">Calendar</Link></li>
                  <li className="main-navbar-item"><Link to="/message">Message</Link></li>
                </ul>
                <div className="main-settings">
                  <div className="main-search-container">
                    <input type="text" placeholder="Search..." className="main-search-input" />
                  </div>
                  <button className="main-logout-button">Logout</button>
                </div>
      </nav>

      <div className="main-carousel-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`main-carousel-image ${currentIndex === index ? 'visible' : ''}`}
            style={{ opacity: currentIndex === index ? 1 : 0 }}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
