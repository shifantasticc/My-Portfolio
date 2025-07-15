import './About.css';
import Footer from './Footer';
import Skills from './Skills';
import Image from '/About.png';

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="about-content">
          <div className="about-text">
            <p className="title">
              Know Who <span>I'M</span>
            </p>
            <p>
              Hi Everyone, I am <span>Shifa Shaikh</span> from{' '}
              <span>Mumbai, India.</span> Currently in my 3rd year pursuing
              B.Sc. in Information Technology at SNDT University, Mumbai. I'm passionate about{' '}
              <span>web development</span> and have a growing interest in{' '}
              <span> Data Structures and Algorithms using Java.</span>
            </p>
            <p>
              I am looking forward to gain competency and exposure in{' '}
              <span>
                {' '}
                Web development, Data Structures and Algorithms and Machine
                Learning.
              </span>
            </p>
            <p>
              Apart from coding, some other activities that I love to do!
              <ul>
                <li>Reading</li>
                <li>Analyzing Case Study</li>
                <li>Exploring Languages & Cultures</li>
                <li>Solving Logic Puzzles & Brain Teasers</li>
              </ul>
            </p>
          </div>
          <div className="About-Img">
            <img src={Image} alt="Web Developer" className="About-image" />
          </div>
        </div>
        <div className="quote">
          <p>
            "We are what we repeatedly do. Excellence, then, is not an act, but
            a habit." — Aristotle
          </p>
        </div>
      </section>
      <Skills />
      <Footer />
    </>
  );
};

export default About;
