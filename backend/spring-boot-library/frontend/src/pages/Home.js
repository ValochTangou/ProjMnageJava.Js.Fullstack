import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div className="home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/img1.jpg" // Assuming images are in the correct relative path
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/img2.jpg" // Assuming images are in the correct relative path
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="auth-button">
        <Link to="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-secondary">Create an Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;