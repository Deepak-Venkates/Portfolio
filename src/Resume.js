import React from 'react';
import './Styles/Resume.css';
import Navbar from './Navbar';

const Resume = () => {
  return (
    <div className="resume-container">
        <Navbar />
      <div className="layout-container">
        <div className="content-wrapper">
          <div className="resume-content">
            {/* Header Section */}
            <header className="resume-header">
              <h1 className="name">Deepak</h1>
              <p className="contact-info">
                MERN Stack Developer | 6379137611 | deepakvenkatesh2003@email.com | linkedin.com/in/deepakv11 | github.com/Deepak-11Venkates
              </p>
            </header>

            {/* Certifications Section */}
            <section className="resume-section">
              <h2 className="section-title">Certifications</h2>
              <div className="certification-item">
                <p className="certification-text">React, NodeJS, Express & MongoDB - The MERN Fullstack Guide (Udemy)</p>
              </div>
              <div className="certification-item">
                <p className="certification-text">AZ-900 Microsoft Azure Fundamentals (Udemy)</p>
              </div>
              <div className="certification-item">
                <p className="certification-text">AI Tools Workshop Certificate of Completion (Be10x)</p>
              </div>
            </section>

            {/* Education Section */}
            <section className="resume-section">
              <h2 className="section-title">Education</h2>
              <div className="experience-item">
                <div className="experience-content">
                  <h3 className="job-title">B.Sc Computer Science</h3>
                  <p className="job-description">
                    Swami Dayananda College of Arts & Science, Manjakudi. Bharathidasan University (2021 - 2023)
                  </p>
                </div>
                <div className="company-name">
                  <p>now</p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="resume-section">
              <h2 className="section-title">Experience</h2>
              <div className="experience-item">
                <div className="experience-content">
                  <h3 className="job-title">Support Executive</h3>
                  <p className="job-duration">1 year</p>
                  <p className="job-description">
                    Resolved business user tickets, raised change requests for patch activities, escalated bugs via Jira, and coordinated with L2 teams. Proficient in application
                    monitoring, incident handling, and ensuring stable system performance. Experienced in application architecture, enabling efficient system design and contributing
                    to effective website creation.
                  </p>
                </div>
                <div className="company-name">
                  <p>Global IT Services</p>
                </div>
              </div>
            </section>

            {/* Profile Summary Section */}
            <section className="resume-section">
              <h2 className="section-title">Profile Summary</h2>
              <p className="profile-summary">
                Passionate and Innovative MERN Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js. Dedicated to crafting scalable, responsive UIs and robust
                RESTful APIs. Proficient in Git and experienced in seamless team collaboration through GitHub.
              </p>
            </section>

            {/* Projects Section */}
            <section className="resume-section">
              <h2 className="section-title">Projects</h2>
              
              <div className="experience-item">
                <div className="experience-content">
                  <h3 className="job-title">Cafeteria Management System</h3>
                  <p className="job-description">
                    Tech Skills - MongoDB, Express.js, React.js, Node.js, Redux Toolkit. Developed a Cafeteria Management System using the MERN stack to streamline food ordering and
                    billing. Integrated Redux DevTools for real-time debugging and state inspection, enabling efficient identification and resolution of issues. Designed a responsive
                    UI for seamless ordering and checkout experience. Built RESTful APIs to handle product listing, order history, and payment operations.
                  </p>
                </div>
                <div className="company-name">
                  <p>Personal Project</p>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-content">
                  <h3 className="job-title">Chat Application</h3>
                  <p className="job-description">
                    Tech Skills - MongoDB, Express.js, React.js, Node.js, Redux, Socket.IO. Developed a real-time Chat Application using the MERN stack and Socket.IO for instant
                    messaging. Utilized Redux to manage global state, ensuring a smooth and synchronized user experience across components. Implemented real-time communication with
                    Socket.IO for both private and group chats. Added user authentication and chat history storage using MongoDB.
                  </p>
                </div>
                <div className="company-name">
                  <p>Personal Project</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;