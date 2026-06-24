import './Styles/About.css';
import Navbar from './Navbar';
import Profile from './Assets/Deepak-Profile.jpg';

function About() {
    return (
        <div className="about-root">
            <div className="about-layout">
                <Navbar />
                <main className="about-main">
                    <div className="about-content">
                        <div className="about-profile">
                            <div
                                className="about-profile-img"
                                style={{
                                    backgroundImage:
                                        `url(${Profile})`
                                }}
                            ></div>
                            <div className="about-profile-info">
                                <p className="about-profile-name">Deepak</p>
                                <p className="about-profile-role">MERN Stack Developer</p>
                            </div>
                        </div>
                        <p className="about-description">
                            MERN Stack Developer skilled in building responsive, high-performance web apps with MongoDB, Express.js, React.js, and Node.js, specializing in RESTful APIs, Redux, and real-time features.
                        </p>
                        <h2 className="about-section-title">Skills</h2>
                        <div className="about-skills">
                            {[
                                "UI/UX Design",
                                "Responsive Design",
                                "JavaScript",
                                "React.js",
                                "Node.js",
                                "Express.js",
                                "MongoDB",
                                "RESTful APIs",
                                "JWT/OAuth",
                                "Incident Management",
                                "Redux",
                                "Socket.IO",
                                "Git & GitHub",
                                "Agile Methodologies",
                                "N8N",
                                "ServiceNow",
                                "Splunk",
                                "JIRA",
                                "Docker (Basic)"
                            ].map((skill) => (
                                <div className="about-skill" key={skill}>
                                    <p>{skill}</p>
                                </div>
                            ))}
                        </div>
                        <h2 className="about-section-title">Experience</h2>
                        <div className="about-experience">
                            <div className="about-experience-row">
                                <div className="about-experience-icon">
                                    <svg width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                                    </svg>
                                </div>
                                <div className="about-experience-details">
                                    <p className="about-experience-role">Application Support Engineer at Tata Consultancy Services .</p>
                                    <p className="about-experience-duration">May 2024 - Present</p>
                                </div>
                            </div>
                        </div>
                        <h2 className="about-section-title">Education</h2>
                        <div className="about-education">
                            <div className="about-education-row">
                                <div className="about-education-icon">
                                    <svg width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                                    </svg>
                                </div>
                                <div className="about-education-details">
                                    <p className="about-education-degree">Bachelor of Science in Computer Science</p>
                                    <p className="about-education-school">Swami Dayananda College of Arts & Science , Bharathidasan University</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default About;