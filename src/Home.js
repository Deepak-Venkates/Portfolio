import './Styles/Home.css';
import Navbar from './Navbar';
import profile from './Assets/Deepak-Profile.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-root">
            <Navbar />
            <main className="home-main">
                <div className="home-card">
                    <div
                        className="home-profile-img"
                        style={{ backgroundImage: `url(${profile})` }}
                    ></div>
                    <div className="home-card-content">
                        <h1 className="home-welcome">Hello, I'm Deepak  .</h1>
                        <p className="home-subtitle">
                           MERN Stack Developer building scalable, user-friendly web apps.
                        </p>
                        <p className="home-description">
                         Passionate MERN Stack Developer with expertise in building dynamic, responsive, and high-performance web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in RESTful API development, state management with Redux, and real-time communication using Socket.IO. Adept at crafting intuitive user interfaces, optimizing backend performance, and delivering end-to-end solutions from concept to deployment.
                        </p>
                        <Link className="home-btn" to='/projects' style={{textDecoration:'none'}}>View My Work</Link>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default Home;