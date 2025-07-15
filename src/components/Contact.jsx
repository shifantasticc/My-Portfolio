import './Contact.css';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">Let's Connect</h1>
        <p className="contact-subtitle">
          Whether it's collaboration, feedback, or just saying hi — I'm just a
          click away.
        </p>

        <div className="icon-links">
          <a
            href="https://github.com/shifantasticc"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <i className="fab fa-github fa-3x"></i>
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/shifantastic"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <i className="fab fa-linkedin fa-3x"></i>
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="contact-footer">
          Designed & Developed by Shifa Shaikh • Built in React
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
