import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="about-header">
            <div className="about-header-left">
                <h2 className="about-title">Deepak V</h2>
            </div>
            <div className="about-header-right">
                <nav className={`about-nav ${isMenuOpen ? 'active' : ''}`}>
                    <Link to='/' onClick={closeMenu}>Home</Link>
                    <Link to='/about' onClick={closeMenu}>About Me</Link>
                    <Link to='/contact' onClick={closeMenu}>Contact</Link>
                    <Link to='/projects' onClick={closeMenu}>Projects</Link>
                </nav>
                <Link className="about-resume-btn" to='/resume' style={{ textDecoration: 'none' }}>
                    <span>Resume</span>
                </Link>
                {/* Mobile Menu Toggle */}
                <div
                    className={`about-mobile-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;