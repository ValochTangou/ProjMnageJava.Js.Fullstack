import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
   return (
     <div className="home">
       <Carousel>
        <Carousel.Item>
         <img className="d-block w-100" src="images/img1.jpg" alt="First slide"/>
         </Carousel.Item>
         <Carousel.Item>
           <img className="d-block w-100" src="images/img2.jpg" alt="Second slide"/>
           </Carousel.Item>
           <div className="auth-button">
             <Link to="login">
              <button className="btn btn-primary">Login</button>
              <button className="btn btn-secondary">Create an Account</button>
              </Link>

           </div>
     </div>
   );
}

export default Home;