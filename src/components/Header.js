// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Optional for styling

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                    <li><Link to="/faculty">Faculty</Link></li>
                    <li><Link to="/student">Student</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
