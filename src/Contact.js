import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import './Styles/Contact.css'; // Assuming you have a CSS file for styles

const Contact = () => {
    // State declarations
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Show toast notification
    const showToastMessage = (message, type) => {
        setToastMessage(message);
        setToastType(type);
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 1000);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // EmailJS Configuration - Replace with your actual values
        const serviceId = 'service_vdcsmv7';     // e.g., 'service_abc123'
        const templateId = 'template_rdemwzj';   // e.g., 'template_xyz789'
        const publicKey = '-aydSd7bzS8MO-s3l';     // e.g., 'user_def456'

        try {
            const result = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                    // to_name: 'Deepak', // Replace with your name
                },
                publicKey
            );

            console.log('Email sent successfully!', result.text);
            showToastMessage('Message sent successfully!', 'success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error);
            showToastMessage('Failed to send message. Please try again.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="contact-container">
            <Navbar />
            <div className="contact-layout">
                <div className="contact-content">
                    <div className="contact-header">
                        <div className="header-content">
                            <p className="contact-title">Get in Touch</p>
                            <p className="contact-description">
                                I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out, and I'll get back to you as soon as possible.
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label className="form-label">
                                <p className="label-text">Name</p>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                <p className="label-text">Email</p>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                <p className="label-text">Subject</p>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="form-input"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                <p className="label-text">Message</p>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    className="form-textarea"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>

                        <div className="form-submit">
                            <button type="submit" className="submit-button" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>

                    <h3 className="connect-title">Connect with Me</h3>

                    <div className="social-container">
                        <div className="social-links">
                            <div className="social-item">
                                <div className="social-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM224,192H32V74.19l92.52,85.48a8,8,0,0,0,11,0L224,74.19V192Z" />
                                    </svg>
                                </div>
                                <p className="social-text">Email</p>
                                <p className="contact-info">deepakvenkatesh2003@gmail.com</p>
                            </div>

                            <div className="social-item">
                                <div className="social-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" />
                                    </svg>
                                </div>
                                <p className="social-text">Phone</p>
                                <p className="contact-info">+91  6379137611</p>
                            </div>

                            <a className="social-item" style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/deepakv11/" target="new" rel="noopener noreferrer">
                                <div className="social-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                                    </svg>
                                </div>
                                <p className="social-text">LinkedIn</p>
                            </a>

                            <a className="social-item" style={{textDecoration: 'none'}} href="https://github.com/Deepak-Venkates" target="new" rel="noopener noreferrer">
                                <div className="social-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" />
                                    </svg>
                                </div>
                                <p className="social-text">GitHub</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            {showToast && (
                <div className={`toast ${toastType}`}>
                    <div className="toast-content">
                        {toastType === 'success' ? (
                            <svg className="toast-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="toast-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        )}
                        <span className="toast-text">{toastMessage}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;