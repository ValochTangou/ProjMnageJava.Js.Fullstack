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
            src="/images/img1.jpg" // Chemin d'accès correct aux images
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/img2.jpg" // Chemin d'accès correct aux images
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="auth-button mt-3">
        <Link to="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
        <Link to="/register" className="ml-2">
          <button className="btn btn-secondary">Create an Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
