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

            {/* Profile Summary Section */}
            <section className="resume-section">
              <h2 className="section-title">Profile Summary</h2>
              <p className="profile-summary">
                MERN Stack Developer with hands-on project experience in real-time web apps and AI-integrated workflows. Skilled
                in React.js, JavaScript, RESTful APIs, MongoDB, and responsive web development, with a strong focus on clean code
                and scalable application development.
              </p>
            </section>


            {/* Projects Section */}
            <section className="resume-section">
              <h2 className="section-title">Projects</h2>

              <div className="experience-item">
                <div className="experience-content">
                  <h3 className="job-title">Cafeteria Management System</h3>
                  <p className="job-description">
                    Tech Stack - MongoDB, Express.js, React.js, Node.js, Redux Toolkit. Developed a Cafeteria Management System using the MERN stack to streamline food ordering and
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
                  <h3 className="job-title">Real-time Chat Application</h3>
                  <p className="job-description">
                    Tech Stack - MongoDB, Express.js, React.js, Node.js, Redux, Socket.IO. Developed a real-time Chat Application using the MERN stack and Socket.IO for instant
                    messaging. Utilized Redux to manage global state, ensuring a smooth and synchronized user experience across components. Implemented real-time communication with
                    Socket.IO for both private and group chats. Added user authentication and chat history storage using MongoDB.
                  </p>
                </div>
                <div className="company-name">
                  <p>Personal Project</p>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-content">
                  <h3 className="job-title">AI Image Generator</h3>
                  <p className="job-description">
                    Tech Stack - MongoDB, Express.js, React.js, Node.js, Stable diffusion , Cloudinary. Developed an AI-powered Image Generator using the MERN stack
                    integrated with the Stable Diffusion API for text-to-image generation. Utilized Cloudinary for efficient image storage, optimization, and delivery.
                    Implemented real-time image generation with loading states and error handling. Designed a responsive gallery interface to display generated images seamlessly.
                  </p>
                </div>
                <div className="company-name">
                  <p>Personal Project</p>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-content">
                  <h3 className="job-title">AI-Powered Resume Analyzer</h3>
                  <p className="job-description">
                    Tech Stack - MongoDB, Express.js, React.js, Node.js, N8N. Developed an AI-powered Resume Analyzer using the MERN stack with an n8n workflow
                    for automated resume and job description comparison. Utilized the n8n workflow to receive extracted text from resumes and job descriptions,
                    leveraging AI to analyze and compare them. Implemented scoring algorithms to generate match percentages and actionable suggestions for improvement.
                    Designed a clean interface for uploading resumes and viewing detailed analysis results.
                  </p>
                </div>
                <div className="company-name">
                  <p>Personal Project</p>
                </div>
              </div>

            </section>

            {/* Experience Section */}
            <section className="resume-section">
              <h2 className="section-title">Experience</h2>
              <div className="experience-item">
                <div className="experience-content">
                  <h3 className="job-title">Application Support Engineer</h3>
                  <p className="job-duration">2 years</p>
                  <p className="job-description">
                    Resolved 30+ production incidents and business user tickets monthly while ensuring 99.9% SLA compliance
                    and application availability.Analysed application logs and source code to troubleshoot issues, implement bug fixes, and support
                    deployments. Tracked and resolved defects using Jira, coordinating patch releases with cross-functional teams. Collaborated with L2/L3 teams to perform root cause analysis and maintain stable application performance.
                  </p>
                </div>
                <div className="company-name">
                  <p>Global IT Services</p>
                </div>
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
                {/* <div className="company-name">
                  <p>now</p>
                </div> */}
              </div>
            </section>

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

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;