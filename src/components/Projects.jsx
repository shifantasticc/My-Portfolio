import './Projects.css';

const projectData = [
  {
    title: 'SerenoStay– Hotel Booking Web Application.',
    description:
      'SerenoStay is a full-stack hotel booking web app built on MVC architecture. Users can explore hotels, view details, and book rooms easily, while admins manage listings, bookings, and customer interactions seamlessly.',
    image: '/SerenoStay.png',
    link: 'https://serenostay-project.onrender.com/listings',
  },
  {
    title: 'Weather App– React Project',
    description:
      'Weather App is a responsive React & and Material UI application that fetches real-time weather data based on user input. It displays temperature, weather conditions, and location details using clean UI and API integration.',
    image: 'WeatherApp.png',
    link: 'https://github.com/shifantasticc/Practice-React',
  },
  {
    title: 'Portfolio– React Project',
    description:
      'Portfolio Website is a personal project built using React. It features a dynamic and responsive layout to showcase projects and about information. The site includes reusable components, smooth navigation, and a clean UI for an engaging user experience.',
    image: 'Portfolio.png',
    link: 'https://portfolio-shifa.netlify.app/',
  },
  {
    title: 'Simon Says Game',
    description:
      'Developed a responsive To-Do List app using React, with efficient state management handled by Redux Toolkit. Implemented features like adding, editing, deleting, and filtering tasks with clean, modular code.',
    image: '/simonSays.png',
    link: 'https://github.com/shifantasticc/Front-End-Projects',
  },
  {
    title: 'Rock Paper Scissors Game',
    description:
      'Rock Paper Scissors is a front-end game built with HTML, CSS, and JavaScript. It allows users to play against the computer with dynamic score tracking, interactive UI, and real-time game logic for a fun and responsive experience.',
    image: '/rockpaper.png',
    link: 'https://github.com/shifantasticc/Front-End-Projects',
  },
  {
    title: 'Tic–Tac–Toe Game',
    description:
      'Tic-Tac-Toe is a simple front-end game built using HTML, CSS, and JavaScript. It features a responsive grid layout, turn-based logic, and win detection, allowing two players to play interactively with a smooth user experience',
    image: '/XO.png',
    link: 'https://github.com/shifantasticc/Front-End-Projects',
  },
  {
    title: 'Color Generator',
    description:
      'Color Generator is a web app built with HTML, CSS, and JavaScript. It dynamically generates random colors, displays their RGB codes, and allows users to copy them easily. The app features a clean, interactive UI for exploring color combinations in real-time.',
    image: '/color.png',
    link: 'https://github.com/shifantasticc/Front-End-Projects',
  },
  {
    title: 'Spotify Clone– Front-end Project',
    description:
      'Spotify Clone is a front-end project. It recreates the look and feel of Spotify’s user interface with a responsive layout and interactive design elements like a music player and sidebar navigation—offering a visually appealing user experience.',
    image: 'Spotify.png',
    link: 'https://github.com/shifantasticc/Front-End-Projects',
  },
  {
    title: 'StreamCall– Video Conferrencing Application.',
    description:
      'StreamCall is a video calling web app built using React and follows the MVC architecture. It offers real-time video and audio communication with a clean, responsive interface. The app ensures organized virtual meetings.',
    image: 'Portfolio.png',
    link: 'https://github.com/shifantasticc/StreamCall-Project',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>
       PROJECTS &nbsp;<i class="fa-solid fa-laptop-code"></i>
      </h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
