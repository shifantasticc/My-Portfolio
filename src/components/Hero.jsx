import './Hero.css';
import Intro from './Intro';
import Footer from './Footer';
import Image1 from '/WebDev.png';

const Hero = () => {
  return (
    <>
      <div className="hero" id="home">
        <div className="Home-Intro">
          <h1>
            <i>Hi There!</i>👋
          </h1>
          <h1>I'M SHIFA SHAIKH</h1>
          <h2>
            <span>MERN Stack Web-Developer.</span>
          </h2>
          <a href="resume-ShifaShaikh.pdf" download className="btn">
            View Resume
          </a>
          <a href="/contact" className="btn">
            Contact Me
          </a>
        </div>
        <div className="Home-Img">
          <img src={Image1} alt="Web Developer" className="hero-image" />
        </div>
      </div>
      <Intro />
      <Footer />
    </>
  );
};

export default Hero;
