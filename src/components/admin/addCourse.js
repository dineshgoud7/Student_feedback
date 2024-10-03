// src/components/Admin/AddCourse.js
import React, { useState } from 'react';

const AddCourse = () => {
    const [courseName, setCourseName] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [courseFaculty, setCourseFaculty] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic here to handle form submission (e.g., send data to backend)
        console.log('Course Added:', { courseName, courseCode, courseFaculty });
        // Clear form fields after submission
        setCourseName('');
        setCourseCode('');
        setCourseFaculty('');
    };

    return (
        <div>
            <h2>Add Course</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Course Name:</label>
                    <input
                        type="text"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Course Code:</label>
                    <input
                        type="text"
                        value={courseCode}
                        onChange={(e) => setCourseCode(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Assign Faculty:</label>
                    <input
                        type="text"
                        value={courseFaculty}
                        onChange={(e) => setCourseFaculty(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Course</button>
            </form>
        </div>
    );
};

export default AddCourse;
