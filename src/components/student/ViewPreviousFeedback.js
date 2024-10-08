// src/components/Student/ViewPreviousFeedback.js
import React, { useState } from 'react';

const ViewPreviousFeedback = () => {
    // Simulated feedback data submitted by the student
    const [previousFeedback,] = useState([
        { course: 'Math', rating: 4, comments: 'Great course!' },
        { course: 'Science', rating: 5, comments: 'Very informative.' }
    ]);

    return (
        <div>
            <h2>Your Previous Feedback</h2>
            {previousFeedback.length > 0 ? (
                <ul>
                    {previousFeedback.map((feedback, index) => (
                        <li key={index}>
                            <p><strong>Course:</strong> {feedback.course}</p>
                            <p><strong>Rating:</strong> {feedback.rating}</p>
                            <p><strong>Comments:</strong> {feedback.comments}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>You haven't submitted any feedback yet.</p>
            )}
        </div>
    );
};

export default ViewPreviousFeedback;
