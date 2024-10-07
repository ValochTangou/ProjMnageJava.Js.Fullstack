import React, { useEffect, useState } from 'react';

const AboutAuthor = () => {
  const [isImageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`about-author-container ${isImageVisible ? 'active' : ''}`}>
      <div className={`author-image-container ${isImageVisible ? 'fade-in' : ''}`}>
        <img src="/images/img8.jpg" alt="Author" className="author-image" />
      </div>

      <div className="author-info">
        <h1>About the Author</h1>
        <p>
          I'm Regis Tangou, a passionate software developer. I like creating modern web applications,
          especially Java full-stack with JavaScript, and much more...
        </p>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/Regis Tangou" target="_blank" rel="opener referrer">
            Connect on LinkedIn
          </a>
          <a href="rtangou@gmail.com" className="email-link">
            Send me an email
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
