// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Ensure you have the CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to the Student Feedback System</h1>
                <p>Your feedback matters! Join us in improving the educational experience.</p>
                <div className="home-buttons">
                    <Link to="/login" className="home-button">Login</Link>
                    <Link to="/register" className="home-button">Register</Link>
                    <Link to="/contact" className="home-button">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
