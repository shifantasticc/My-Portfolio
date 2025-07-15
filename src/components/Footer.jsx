import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/shifantastic/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <span>|</span>
          <a
            href="https://github.com/shifantasticc"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>

        <h4>Designed & Developed by Shifa Shaikh</h4>

        <p className="footer-email">
          <a href="mailto:shifashaikh6219@gmail.com">
            <i className="fas fa-envelope"></i> shifashaikh6219@gmail.com
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
