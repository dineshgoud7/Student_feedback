// src/components/Admin/ViewStudents.js
import React from 'react';
import './ViewStudents.css'; // Import CSS for styling

const ViewStudents = () => {
    const students = [
        { id: 1, name: 'John Doe', email: 'john@example.com', course: 'Computer Science' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'Mechanical Engineering' },
        { id: 3, name: 'Sam Wilson', email: 'sam@example.com', course: 'Electrical Engineering' },
        { id: 4, name: 'Sara Brown', email: 'sara@example.com', course: 'Civil Engineering' },
    ];

    return (
        <div className="view-students">
            <h2>View Students</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.course}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewStudents;
