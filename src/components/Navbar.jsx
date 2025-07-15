import { NavLink } from 'react-router-dom';
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
        <NavLink to="/" style={{color: "white"}}>Shifa Shaikh</NavLink>{' '}
        <i>
          <span>— MY PORTFOLIO</span>
        </i>
      </h1>
      <ul className="options">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
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
