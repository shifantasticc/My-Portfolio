import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Contact Me Here</h2>
        <p>
          Email: <a href="shifashaikh6219@gmail.com">shifashaikh6219@gmail.com</a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/shifantastic/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/shifantastic/
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/shifantasticc"
            target="_blank"
            rel="noreferrer"
          >
            github.com/shifantasticc
          </a>
        </p>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Shifa Shaikh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
