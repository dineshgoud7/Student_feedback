// src/components/Student/StudentDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './StudentDashboard.css'; // Import StudentDashboard.css for specific styling

const StudentDashboard = () => {
    return (
        <div className="student-dashboard">
            <h2>Student Dashboard</h2>
            <div className="student-links">
                <Link to="/student/give-feedback">Give Feedback</Link>
                <Link to="/student/view-feedback">View Feedback</Link>
                <Link to="/student/view-previous-feedback">View Previous Feedback</Link>
                <Link to="/student/courses">View Courses</Link> {/* Added link to course list */}
            </div>
        </div>
    );
}

export default StudentDashboard;
