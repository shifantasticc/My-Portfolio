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
              Hello, I’m Shifa Shaikh— a passionate{' '}
              <i>
                <span>Full-staclk Web Developer</span>
              </i>
            </p>

            <p>
              I'm proficient in core technologies like the{' '}
              <i>
                <span>MERN stack, Javascript, SQL, Java, Python, </span>
              </i>
              along with version control tools such as{' '}
              <i>
                <span>Git/GitHub .</span>{' '}
              </i>
            </p>

            <p>
              I'm especially passionate about building{' '}
              <i>
                <span>responsive and user-friendly web applications</span>
              </i>{' '}
              that offer real-world value and seamless user experiences.
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
