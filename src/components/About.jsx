import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
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

          <p>
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
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
