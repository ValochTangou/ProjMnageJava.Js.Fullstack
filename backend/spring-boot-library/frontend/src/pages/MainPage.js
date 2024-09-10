import React from 'react';

function MainPage() {
  return(
    <div className="main-page">

    <nav className="navbar">
      <ul>
        <li>Tasker</li>
        <li>Overview</li>
        <li>Project</li>
        <li>Team</li>
        <li>Calendar</li>
        <li>Message</li>
        <li>About Author</li>
      </ul>
    </nav>

   <div className="settings">
   <span>icone de recherche ici</span>
   <button>Logout</button>
   </div>

 <div className="carousel-container">
 <img src="images/img1.jpg" alt="first slide"/>
 <img src="images/img2.jpg" alt="second slide"/>
 <img src="images/img3.jpg" alt="third slide"/>
 <img src="images/img4.jpg" alt="fourth slide"/>
 <img src="images/img5.jpg" alt="fifth slide"/>
 </div>
 </div>
</div>
  );
}

export default MainPage;