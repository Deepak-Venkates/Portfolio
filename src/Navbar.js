import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="about-header">
                <div className="about-header-left">
                    <h2 className="about-title">Deepak V</h2>
                </div>
                <div className="about-header-right">
                    <nav className="about-nav">
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

            {/* Mobile Menu Overlay */}
            <div className={`about-mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

            {/* Mobile Menu */}
            <div className={`about-mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                {/* Close Button */}
                <button 
                    className="about-mobile-close-btn" 
                    onClick={closeMenu}
                    aria-label="Close menu"
                >
                    <span></span>
                    <span></span>
                </button>

                <nav className="about-mobile-nav">
                    <Link to='/' onClick={closeMenu}>Home</Link>
                    <Link to='/about' onClick={closeMenu}>About Me</Link>
                    <Link to='/contact' onClick={closeMenu}>Contact</Link>
                    <Link to='/projects' onClick={closeMenu}>Projects</Link>
                    <Link to='/resume' onClick={closeMenu} className="about-mobile-resume-btn">Resume</Link>
                </nav>
            </div>
        </>
    );
};

export default Navbar;