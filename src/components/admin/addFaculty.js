// src/components/Admin/AddFaculty.js
import React, { useState } from 'react';

const AddFaculty = () => {
    const [facultyName, setFacultyName] = useState('');
    const [facultyEmail, setFacultyEmail] = useState('');
    const [facultyDepartment, setFacultyDepartment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic here to handle form submission (e.g., send data to backend)
        console.log('Faculty Added:', { facultyName, facultyEmail, facultyDepartment });
        // Clear form fields after submission
        setFacultyName('');
        setFacultyEmail('');
        setFacultyDepartment('');
    };

    return (
        <div>
            <h2>Add Faculty</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Faculty Name:</label>
                    <input
                        type="text"
                        value={facultyName}
                        onChange={(e) => setFacultyName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Faculty Email:</label>
                    <input
                        type="email"
                        value={facultyEmail}
                        onChange={(e) => setFacultyEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Faculty Department:</label>
                    <input
                        type="text"
                        value={facultyDepartment}
                        onChange={(e) => setFacultyDepartment(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Faculty</button>
            </form>
        </div>
    );
};

export default AddFaculty;
