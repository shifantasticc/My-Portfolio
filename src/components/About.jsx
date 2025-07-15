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
              {' '}
              Hi Everyone, I am <span>Shifa Shaikh</span> from{' '}
              <span>Mumbai, India.</span> I am currently 3rd year BSc student of
              Information Technology at SNDT, Mumbai. I'm{' '}
              <span>Web developer</span> and{' '}
              <span>DSA in Java enthusiast.</span>
            </p>

            <p>
              I am looking forward to gain competency and exposure in{' '}
              <span>
                Web development, Data Structures and Algorithms and Machine
                Learning.
              </span>
            </p>

            <p>
              {' '}
              Apart from coding, some other activities that I love to do!
              <ul>
                <li>Reading</li>
                <li>Case Study</li>
                <li>Learning Language & Culture</li>
              </ul>
            </p>

            <div className="quote">
              <p>
                "We are what we repeatedly do. Excellence, then, is not an act,{' '}
                <br />
                but a habit."
              </p>
              <p>— Aristotle</p>
            </div>
          </div>
          <div className="About-Img">
            <img src={Image} alt="Web Developer" className="About-image" />
          </div>
        </div>
      </section>
      <Skills />
      <Footer />
    </>
  );
};

export default About;
