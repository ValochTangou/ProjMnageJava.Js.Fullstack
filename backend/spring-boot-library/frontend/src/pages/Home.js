import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simule une animation de fade-in lors du chargement de la page
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Attente de 500ms avant d'afficher le contenu
  }, []);

  return (
    <div className={`home ${isVisible ? 'fade-in' : ''}`}>
      <Carousel className="carousel-container">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/img1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Bienvenue à l'application de gestion</h3>
            <p>Découvrez des fonctionnalités puissantes pour gérer vos projets.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/img2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Collaborer avec votre équipe</h3>
            <p>Travaillez ensemble pour atteindre vos objectifs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/img3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Organisez vos tâches facilement</h3>
            <p>Une interface fluide pour suivre vos tâches.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/img4.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Suivez vos progrès</h3>
            <p>Des tableaux de bord intuitifs pour tout suivre en temps réel.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/img5.jpg"
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>Communiquez avec votre équipe</h3>
            <p>Un système de messagerie intégré pour une meilleure collaboration.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/img6.jpg"
            alt="Sixth slide"
          />
          <Carousel.Caption>
            <h3>Gérez les deadlines</h3>
            <p>Respectez vos délais grâce à des rappels automatiques.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/img7.jpg"
            alt="Seventh slide"
          />
          <Carousel.Caption>
            <h3>Personnalisez votre expérience</h3>
            <p>Une application flexible et personnalisable selon vos besoins.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="auth-buttons mt-4 text-center">
        <Link to="/login">
          <button className="btn btn-primary btn-lg mx-2">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-secondary btn-lg mx-2">Create an Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
