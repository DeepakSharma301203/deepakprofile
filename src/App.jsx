import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Server, Database, GitMerge, Send, Menu, X, Sun, Moon, Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';
import p from "./assets/pp.jpg"; // User's local profile photo import
import './App.css'; // Import the new CSS file

// Main App Component
export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

    // Effect for dark mode
    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    }, [isDarkMode]);
    
    // Effect for header shadow on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect for active nav link on scroll
    useEffect(() => {
      const sections = document.querySelectorAll('section[id]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      }, { rootMargin: '-50% 0px -50% 0px' });
  
      sections.forEach(section => observer.observe(section));
  
      return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    // Function for smooth scroll and closing mobile menu
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
                description: "Currently working on it!! Building a full-stack e-commerce platform using MERN stack, integrating product catalogue, cart, and order management. Implemented secure authentication, payment integration, and responsive UI.",
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
                title: "My Portfolio - Deepak's Profile",
                description: "A React-based app to my profile and skills. Used Bootstrap for responsive UI and dynamic user experience.",
                tech: ["React", "Bootstrap", "Node.js", "Express"],
                liveLink: "https://deepakprofile.vercel.app/",
                repoLink: "https://github.com/DeepakSharma301203/deepakprofile",
            },
          {
                title: "Vidya Mandir School- School Website",
                description: "A React-based app to view School details and get information. Used Bootstrap for responsive UI and dynamic user experience. Features include apply now, login, student dashboard, and teacher dashboard.",
                tech: ["React", "Bootstrap", "Node.js", "Express","MongoDB"],
                liveLink: "#",
                repoLink: "#",
            }
        ],
        experience: [
          {
                role: "Data Science Intern",
                company: "Personifwy",
                duration: "Oct 2024 - Dec 2024",
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

    const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

    return (
        <>
            <header className={`header ${scrolled ? 'scroll-header' : ''}`}>
                <nav className="nav container">
                    <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-logo">
                        {portfolioData.name}
                    </a>

                    {/* This wrapper div fixes the alignment issue */}
                    <div className="nav-right">
                        <div className={`nav-menu ${isMenuOpen ? 'show-menu' : ''}`}>
                            <ul className="nav-list">
                                {navItems.map(item => (
                                    <li key={item} className="nav-item">
                                        <a 
                                          href={`#${item}`} 
                                          onClick={(e) => handleNavClick(e, item)} 
                                          className={`nav-link capitalize ${activeNav === `#${item}` ? 'active-link' : ''}`}
                                        >
                                          {item === 'home' ? 'Home' : item}
                                        </a>
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
                                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={24}/></a>
                                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24}/></a>
                                <a href={portfolioData.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><Code size={24}/></a>
                                <a href={`mailto:${portfolioData.email}`} aria-label="Email"><Mail size={24}/></a>
                            </div>
                            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="button">
                                Contact Me <Send size={20}/>
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
                                <div key={project.title} className="project-card card">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tech-tags">
                                        {project.tech.map(t => <span key={t}>{t}</span>)}
                                    </div>
                                    <div className="project-links">
                                        {project.liveLink && project.liveLink !== "#" && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo <ExternalLink size={18}/></a>
                                        )}
                                        {project.repoLink && project.repoLink !== "" && (
                                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub <Github size={18}/></a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact section">
                    <div className="container contact-container">
                        <h2 className="section-title">Get In Touch</h2>
                        <p>I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                        <a href={`mailto:${portfolioData.email}`} className="button">
                           Say Hello <Send size={20}/>
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
