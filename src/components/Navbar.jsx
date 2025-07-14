import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h1 className="logo">
        Shifa Shaikh{' '}
        <i>
          <span>— MY PORTFOLIO</span>
        </i>{' '}
      </h1>
      <ul className="options">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <div className="resume">
          <li>
            <a href="resume-ShifaShaikh.pdf" download className="btn">
              Resume
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
