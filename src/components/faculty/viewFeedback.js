// src/components/Faculty/ViewFeedback.js
import React from 'react';

const ViewFeedback = () => {
    // Fetch feedback data (in a real app, this would come from a server)
    const feedbackData = [
        { student: 'John Doe', course: 'Math', rating: 4, comments: 'Great course!' },
        { student: 'Jane Doe', course: 'Science', rating: 5, comments: 'Very informative.' }
    ];

    return (
        <div>
            <h2>Feedback</h2>
            <ul>
                {feedbackData.map((feedback, index) => (
                    <li key={index}>
                        <p>Student: {feedback.student}</p>
                        <p>Course: {feedback.course}</p>
                        <p>Rating: {feedback.rating}</p>
                        <p>Comments: {feedback.comments}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewFeedback;
