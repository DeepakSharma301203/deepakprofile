import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Server, Database, GitMerge, Send, Menu, X, Sun, Moon, Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';
import p from "./assets/pp.jpg"; // User's local profile photo import

// CSS Styles ko component ke andar add kiya gaya hai
const AppStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* ===== Google Fonts ===== */
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

      /* ===== CSS Variables ===== */
      :root {
        --header-height: 3.5rem;
        
        /* Colors - New Professional Blue Theme */
        --hue: 207;
        --first-color: hsl(var(--hue), 69%, 61%);
        --first-color-alt: hsl(var(--hue), 69%, 57%);
        --title-color: hsl(var(--hue), 8%, 15%);
        --text-color: hsl(var(--hue), 8%, 45%);
        --text-color-light: hsl(var(--hue), 8%, 65%);
        --body-color: hsl(var(--hue), 60%, 99%);
        --container-color: #FFF;
        --border-color: hsl(var(--hue), 8%, 90%);

        /* Font */
        --body-font: 'Poppins', sans-serif;
        --biggest-font-size: 2.25rem;
        --h1-font-size: 1.75rem;
        --h2-font-size: 1.25rem;
        --h3-font-size: 1rem;
        --normal-font-size: .938rem;
        --small-font-size: .813rem;

        /* Font weight */
        --font-medium: 500;
        --font-semibold: 600;
        --font-bold: 700;

        /* Margins */
        --mb-0-5: .5rem;
        --mb-1: 1rem;
        --mb-1-5: 1.5rem;
        --mb-2: 2rem;

        /* Z-index */
        --z-tooltip: 10;
        --z-fixed: 100;
      }

      /* Dark theme variables */
      body.dark-mode {
        --title-color: hsl(var(--hue), 8%, 95%);
        --text-color: hsl(var(--hue), 8%, 75%);
        --body-color: hsl(var(--hue), 28%, 12%);
        --container-color: hsl(var(--hue), 28%, 16%);
        --border-color: hsl(var(--hue), 28%, 25%);
      }

      /* ===== Base ===== */
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
        background-color: var(--body-color);
        color: var(--text-color);
        transition: background-color 0.4s, color 0.4s;
      }

      h1, h2, h3, h4 {
        color: var(--title-color);
        font-weight: var(--font-semibold);
      }

      ul {
        list-style: none;
      }

      a {
        text-decoration: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      /* ===== Reusable CSS Classes ===== */
      .container {
        max-width: 1200px; /* Width badha di gayi hai */
        margin-left: auto;
        margin-right: auto;
        padding-left: var(--mb-1-5);
        padding-right: var(--mb-1-5);
      }

      .section {
        padding: 4.5rem 0 2rem;
      }

      .section-title {
        font-size: var(--h1-font-size);
        text-align: center;
        margin-bottom: var(--mb-2);
      }

      /* ===== Header & Nav ===== */
      .header {
        width: 100%;
        background-color: var(--body-color);
        position: fixed;
        top: 0;
        left: 0;
        z-index: var(--z-fixed);
        transition: .4s;
        box-shadow: 0 1px 4px hsla(0, 4%, 15%, .1);
      }
      body.dark-mode .header {
        box-shadow: 0 1px 4px hsla(0, 0%, 4%, 0.3);
      }

      .nav {
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .nav-logo {
        color: var(--title-color);
        font-weight: var(--font-medium);
      }

      .nav-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .theme-button, .nav-toggle {
        background: none;
        border: none;
        color: var(--title-color);
        cursor: pointer;
        font-size: 1.25rem;
      }

      @media screen and (max-width: 767px) {
        .nav-menu {
          position: fixed;
          background-color: var(--container-color);
          width: 80%;
          height: 100%;
          top: 0;
          right: -100%;
          padding: 4rem 2rem 3rem;
          transition: .4s;
          box-shadow: -2px 0 4px hsla(0, 4%, 15%, .1);
        }
      }

      .nav-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .nav-link {
        color: var(--title-color);
        font-weight: var(--font-medium);
        transition: .3s;
      }

      .nav-link:hover {
        color: var(--first-color);
      }

      .show-menu {
        right: 0;
      }
      
      /* ===== Hero Section ===== */
      .hero {
            width: 107%;
            background-color: var(--body-color);
          min-height: 100vh;
          display: grid;
          align-items: center;
          justify-items: center;
      }
      .hero-grid {
          display: grid;
          gap: 2rem;
          align-items: center;
      }
      .hero-content {
        text-align: center;
      }
      .hero-content h1 {
          font-size: var(--biggest-font-size);
      }
      .hero-content .highlight {
          color: var(--first-color);
      }
      .hero-content .subtitle {
          font-size: var(--h2-font-size);
          margin-bottom: var(--mb-1);
          color: var(--text-color);
      }
      .hero-content .summary {
          max-width: 600px;
          margin: 0 auto var(--mb-2);
      }
      .hero-image-container {
        display: flex;
        justify-content: center;
        order: -1;
      }
      .hero-image {
        width: 280px;
        height: 280px;
        border-radius: 50%;
        object-fit: cover;
        border: 7px solid var(--container-color);
        box-shadow: 0 4px 20px hsla(var(--hue), 40%, 15%, .2);
      }
      .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: var(--mb-2);
      }
      .social-links a {
          color: var(--title-color);
          transition: .3s;
      }
      .social-links a:hover {
          color: var(--first-color);
          transform: translateY(-2px);
      }
      .button {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          background-color: var(--first-color);
          color: #fff;
          padding: 1rem 1.5rem;
          border-radius: .5rem;
          font-weight: var(--font-medium);
          transition: .3s;
          box-shadow: 0 4px 8px hsla(var(--hue), 69%, 61%, 0.4);
      }
      .button:hover {
          background-color: var(--first-color-alt);
          transform: translateY(-2px);
      }

      /* ===== About Section ===== */
      .about {
        width: 107%;
        background-color: var(--container-color);
      }
      .about-details .card {
          background-color: var(--body-color);
          border: 1px solid var(--border-color);
          padding: 1.5rem;
          border-radius: .75rem;
          margin-bottom: var(--mb-1-5);
          transition: transform 0.3s, box-shadow 0.3s;
      }
      .about-details .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px hsla(var(--hue), 8%, 15%, 0.1);
      }
      body.dark-mode .about-details .card:hover {
          box-shadow: 0 8px 20px hsla(var(--hue), 28%, 4%, 0.2);
      }
      .card h3 {
          font-size: var(--h3-font-size);
          margin-bottom: var(--mb-1);
          display: flex;
          align-items: center;
          gap: .5rem;
      }
      .card-icon {
          color: var(--first-color);
      }
      .card ul {
          list-style-position: inside;
          list-style-type: disc;
          padding-left: 1rem;
      }
      .card .duration {
          font-size: var(--small-font-size);
          color: var(--text-color-light);
          margin-bottom: var(--mb-0-5);
      }

      /* ===== Skills Section ===== */
      .skills{
        background-color: var(--body-color);
        width: 107%;
      }
      .skills-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
      }
      .skill-item {
          display: flex;
          align-items: center;
          gap: .5rem;
          background-color: var(--container-color);
          padding: .75rem 1rem;
          border-radius: .5rem;
          border: 1px solid var(--border-color);
          font-weight: var(--font-medium);
          transition: transform 0.3s;
      }
      .skill-item:hover {
          transform: translateY(-3px);
      }
      .skill-icon {
          color: var(--first-color);
      }

      /* ===== Projects Section ===== */
      
      .projects {
        width: 107%;
        background-color: var(--container-color);
      }
      .projects-grid {
          display: grid;
          gap: 1.5rem;
      }
      .project-card {
          background-color: var(--body-color);
          padding: 1.5rem;
          border-radius: .75rem;
          border: 1px solid var(--border-color);
          transition: transform 0.3s, box-shadow 0.3s;
      }
      .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px hsla(var(--hue), 8%, 15%, 0.1);
      }
      body.dark-mode .project-card:hover {
          box-shadow: 0 8px 20px hsla(var(--hue), 28%, 4%, 0.2);
      }
      .project-card h3 {
          font-size: var(--h3-font-size);
          margin-bottom: var(--mb-0-5);
      }
      .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin: var(--mb-1) 0;
      }
      .tech-tags span {
          background-color: hsl(var(--hue), 69%, 94%);
          color: var(--first-color);
          padding: .25rem .5rem;
          border-radius: .25rem;
          font-size: var(--small-font-size);
          font-weight: var(--font-medium);
      }
      body.dark-mode .tech-tags span {
          background-color: hsl(var(--hue), 28%, 25%);
          color: hsl(var(--hue), 8%, 80%);
      }
      .project-links {
          display: flex;
          gap: 1rem;
          margin-top: var(--mb-1);
      }
      .project-links a {
          color: var(--first-color);
          font-weight: var(--font-medium);
          display: flex;
          align-items: center;
          gap: .25rem;
      }

      /* ===== Contact Section ===== */
      .contact{
          background-color: var(--body-color);
        width: 107%;
      }
      .contact p {
        
          margin-bottom: var(--mb-2);
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
      }
      .contact .button {
        display: table;
        margin: 0 auto;
      }

      /* ===== Footer ===== */
      .footer {
            width: 107%;
          padding: 2rem 0;
          text-align: center;
          font-size: var(--small-font-size);
          color: var(--text-color-light);
          background-color: var(--container-color);
      }

      /* ===== Media Queries ===== */
      @media screen and (min-width: 767px) {
        .section {
          padding: 6rem 0 2rem;
        }
        .nav {
          height: calc(var(--header-height) + 1.5rem);
        }
        .nav-toggle {
          display: none;
        }
        .nav-list {
          flex-direction: row;
          gap: 2.5rem;
        }
        .hero-grid {
          grid-template-columns: 1fr 300px;
          text-align: left;
        }
        .hero-content {
          text-align: left;
        }
        .hero-content .summary {
          margin-left: 0;
        }
        .social-links {
          justify-content: flex-start;
        }
        .hero-image-container {
          order: 1;
        }
        .projects-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
       @media screen and (min-width: 992px) {
        :root {
            --biggest-font-size: 4rem;
            --h1-font-size: 2.25rem;
            --h2-font-size: 1.5rem;
            --h3-font-size: 1.25rem;
            --normal-font-size: 1rem;
            --small-font-size: .875rem;
        }
       }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

// Main App Component
export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Dark mode ke liye useEffect
    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);

    // Smooth scroll ke liye function
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const portfolioData = {
        name: "Deepak Sharma",
        title: "Full Stack Developer | SDE",
        email: "deepakpandiit045@gmail.com",
        github: "https://github.com/DeepakSharma301203",
        linkedin: "https://www.linkedin.com/in/deepak-sharma-ro45/",
        leetcode: "https://leetcode.com/u/deepaksharma45/",
        profileImage: p,
        summary: "Energetic and detail-oriented Computer Science Engineering student with expertise in Full Stack Web Development (MERN), Data Structures and Algorithms (DSA). Seeking a Software Development role where I can apply my technical skills and contribute to high-impact projects.",
        skills: [
            { name: "Java", icon: Code },
            { name: "JavaScript", icon: Code },
            { name: "React.js", icon: Code },
            { name: "Node.js", icon: Server },
            { name: "Express.js", icon: Server },
            { name: "MongoDB", icon: Database },
            { name: "MySQL", icon: Database },
            { name: "HTML5", icon: Code },
            { name: "CSS3", icon: Code },
            { name: "Git & GitHub", icon: GitMerge },
        ],
        projects: [
            {
                title: "VamiTrends - E-commerce Platform",
                description: "Cuurently working on it!! Building a full-stack e-commerce platform using MERN stack, integrating product catalogue, cart, and order management. Implemented secure authentication, payment integration, and responsive UI.",
                tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
                liveLink: "#",
                repoLink: "#",
            },
            {
                title: "Wanderlust - Hotel Booking Website",
                description: "A React-based app to browse and book hotels. Used Bootstrap for responsive UI and dynamic user experience. Features include property listings, search, and booking management.",
                tech: ["React", "Bootstrap", "Node.js", "Express"],
                liveLink: "https://majorproject-4dcn.onrender.com/",
                repoLink: "",
            },
          {
                title: "My Portfolio",
                description: "A React-based app to my profile and skills. Used Bootstrap for responsive UI and dynamic user experience.",
                tech: ["React", "Bootstrap", "Node.js", "Express"],
                liveLink: "https://deepakprofile.vercel.app/",
                repoLink: "https://github.com/DeepakSharma301203/deepakprofile",
            }
        ],
        experience: [
          {
                role: "Data Science Intern",
                company: "Personifwy",
                duration: "Oct 2023 - Dec 2023",
                points: [
                    "Analyzed user behavior data to identify trends and optimize web page performance, leading to a 30% improvement in UI consistency.",
                    "Developed and integrated interactive, data-driven components using React.js to enhance user engagement and system performance.",
                    "Collaborated with the development team to implement real-time features and debug production-level issues."
                ]
            },
            {
                role: "Web Developer Intern",
                company: "Stucare Technologies Pvt. Ltd.",
                duration: "May 2024 - July 2024",
                points: [
                    "Developed fully responsive web pages using HTML, CSS, and JavaScript, improving UI consistency by 30%.",
                    "Built interactive components using React.js to enhance user engagement and performance.",
                    "Collaborated with the development team to implement real-time features and debug production-level issues."
                ]
            }
        ],
        education: [
            {
                degree: "Bachelor of Engineering in Computer Science",
                institution: "Chandigarh University",
                duration: "Aug 2022 - Present",
                score: "CGPA: 7.2 (Till 6th Semester)"
            },
        ],
        certifications: [
            "Web Development with JavaScript - Udemy",
            "DSA in Java with PW",
            "MERN Stack (Delta 2.0) - Apna College"
        ]
    };

    return (
        <>
            <AppStyles />
            <header className="header">
                <nav className="nav container">
                    <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-logo">
                        {portfolioData.name}
                    </a>
                    <div className={`nav-menu ${isMenuOpen ? 'show-menu' : ''}`}>
                        <ul className="nav-list">
                            {['About', 'Skills', 'Projects', 'Contact'].map(item => (
                                <li key={item} className="nav-item">
                                    <a href={`#${item.toLowerCase()}`} onClick={(e) => handleNavClick(e, item.toLowerCase())} className="nav-link capitalize">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav-actions">
                        <button onClick={() => setIsDarkMode(!isDarkMode)} className="theme-button">
                            {isDarkMode ? <Sun /> : <Moon />}
                        </button>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="nav-toggle">
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </nav>
            </header>

            <main>
                <section id="home" className="hero section">
                    <div className="hero-grid container">
                        <div className="hero-content">
                            <h1>Hi, I'm <span className="highlight">{portfolioData.name}</span></h1>
                            <p className="subtitle">{portfolioData.title}</p>
                            <p className="summary">{portfolioData.summary}</p>
                            <div className="social-links">
                                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer"><Github size={24}/></a>
                                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={24}/></a>
                                <a href={portfolioData.leetcode} target="_blank" rel="noopener noreferrer"><Code size={24}/></a>
                                <a href={`mailto:${portfolioData.email}`}><Mail size={24}/></a>
                            </div>
                            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="button">
                                Contact Me
                            </a>
                        </div>
                        <div className="hero-image-container">
                            <img src={portfolioData.profileImage} alt="Deepak Sharma" className="hero-image"/>
                        </div>
                    </div>
                </section>

                <section id="about" className="about section">
                    <div className="container">
                        <h2 className="section-title">About Me</h2>
                        <div className="about-details">
                            <div className="card">
                                <h3><Briefcase className="card-icon"/> Experience</h3>
                                {portfolioData.experience.map((exp, index) => (
                                    <div key={index}>
                                        <h4>{exp.role} at {exp.company}</h4>
                                        <p className="duration">{exp.duration}</p>
                                        <ul>{exp.points.map((point, i) => <li key={i}>{point}</li>)}</ul>
                                    </div>
                                ))}
                            </div>
                            <div className="card">
                                <h3><GraduationCap className="card-icon"/> Education</h3>
                                {portfolioData.education.map((edu, index) => (
                                    <div key={index}>
                                        <h4>{edu.degree}</h4>
                                        <p>{edu.institution}</p>
                                        <p className="duration">{edu.duration} | {edu.score}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="card">
                                <h3><Award className="card-icon"/> Certifications</h3>
                                <ul>{portfolioData.certifications.map((cert, i) => <li key={i}>{cert}</li>)}</ul>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="skills" className="skills section">
                    <div className="container">
                        <h2 className="section-title">Technical Skills</h2>
                        <div className="skills-container">
                            {portfolioData.skills.map(skill => (
                                <div key={skill.name} className="skill-item">
                                    <skill.icon className="skill-icon" size={24} />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="projects" className="projects section">
                   <div className="container">
                        <h2 className="section-title">My Projects</h2>
                        <div className="projects-grid">
                            {portfolioData.projects.map(project => (
                                <div key={project.title} className="project-card">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tech-tags">
                                        {project.tech.map(t => <span key={t}>{t}</span>)}
                                    </div>
                                    <div className="project-links">
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink size={18}/></a>
                                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub <Github size={18}/></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact section">
                    <div className="container">
                        <h2 className="section-title">Get In Touch</h2>
                        <p>I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                        <a href={`mailto:${portfolioData.email}`} className="button">
                           Say Hello <Send/>
                        </a>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>Designed & Built by Deepak Sharma &copy; {new Date().getFullYear()}</p>
            </footer>
        </>
    );
}
