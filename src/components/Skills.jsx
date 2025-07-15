import './Skills.css';

const skills = [
  { name: 'HTML', iconClass: 'fa-brands fa-html5' },
  { name: 'CSS', iconClass: 'fa-brands fa-css3-alt' },
  { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
  { name: 'React.js', iconClass: 'fa-brands fa-react' },
  { name: 'Node.js', iconClass: 'fa-brands fa-node' },
  { name: 'Express.js', iconClass: 'fa-solid fa-server' },
  { name: 'MongoDB', iconClass: 'fa-solid fa-database' },
  { name: 'MySQL', iconClass: 'fa-solid fa-database' },
  { name: 'Tailwind', iconClass: 'fa-solid fa-wind' },
  { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
  { name: 'Python', iconClass: 'fa-brands fa-python' },
  { name: 'Java-DSA', iconClass: 'fa-brands fa-java' },
  { name: 'C/C++', iconClass: 'fa-solid fa-code' },
  { name: 'MERN Stack', iconClass: 'fa-solid fa-layer-group' },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>
        Skills&nbsp;
        <i class="fa-solid fa-gears"></i>
      </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <i className={`skill-icon ${skill.iconClass}`}></i>{' '}
            <span className="name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
