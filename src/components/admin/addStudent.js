// src/components/Admin/AddStudent.js
import React, { useState } from 'react';

const AddStudent = () => {
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, course });
        alert('Student Added');
        setName('');
        setCourse('');
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Student Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Course:
                    <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} required />
                </label>
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
}

export default AddStudent;
