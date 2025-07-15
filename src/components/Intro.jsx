import './Intro.css';
import { NavLink } from 'react-router-dom';

const Intro = () => {
  return (
    <>
      <div className="Intro">
        <div className="Intro-content">
          <div className="Intro-text">
            <p className="title">
              LET ME <span>INTRODUCE</span> MYSELF
            </p>
            <p>
              {' '}
              Hello, I'm Shifa Shaikh! A Passionate{' '}
              <i>
                <span>Full-staclk Web Developer</span>
              </i>
            </p>

            <p>
              I am Proficient in classics like{' '}
              <i>
                <span>MERN stack, Javascript, SQL, Java, Python </span>
              </i>
              and version control tools like{' '}
              <i>
                <span>Git/GitHub .</span>{' '}
              </i>
            </p>

            <p>
              My areas of interest includes building new{' '}
              <i>
                <span>Responsive Web Applications. </span>
              </i>
            </p>

            {/* <p>
              {' '}
              Whenever possible, I also apply my passion for developing Websites
              with{' '}
              <i>
                <span>Modern Javascript Frameworks</span>
              </i>{' '}
              like{' '}
              <i>
                <span>Node.js and React.js</span>
              </i>
            </p> */}
            <br />
            <a className="btn">
              <NavLink to="/about">More About Me</NavLink>
            </a>
            <a className="btn">
              <NavLink to="/projects">All Projects</NavLink>
            </a>
          </div>
        </div>
        {/* <div className="Intro-Img">
          <img src={Image2} alt="Web Developer" className="Intro-image" />
        </div> */}
      </div>
    </>
  );
};

export default Intro;
