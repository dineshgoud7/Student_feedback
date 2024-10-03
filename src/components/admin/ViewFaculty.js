// src/components/Admin/ViewFaculty.js
import React from 'react';
import './ViewFaculty.css'; // Import CSS for styling

const ViewFaculty = () => {
    const faculty = [
        { id: 1, name: 'Dr. Alice Johnson', email: 'alice@example.com', department: 'Computer Science' },
        { id: 2, name: 'Prof. Bob Smith', email: 'bob@example.com', department: 'Mechanical Engineering' },
        { id: 3, name: 'Dr. Carol White', email: 'carol@example.com', department: 'Electrical Engineering' },
        { id: 4, name: 'Prof. David Brown', email: 'david@example.com', department: 'Civil Engineering' },
    ];

    return (
        <div className="view-faculty">
            <h2>View Faculty</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {faculty.map((member) => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewFaculty;
