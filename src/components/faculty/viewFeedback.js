import React, { useState, useEffect } from 'react';

const ViewFeedback = () => {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        // In case of API call to fetch data
        // Fetch feedback data and set it in state
        const fetchFeedbackData = async () => {
            // Assuming you're fetching from an API or server
            // Replace the following with your fetch/axios call.
            const data = [
                { student: 'John Doe', course: 'Math', rating: 4, comments: 'Great course!' },
                { student: 'Jane Doe', course: 'Science', rating: 5, comments: 'Very informative.' }
            ];
            setFeedbackData(data);
        };

        fetchFeedbackData();
    }, []);

    return (
        <div>
            <h2>Feedback</h2>
            <ul>
                {feedbackData.length > 0 ? (
                    feedbackData.map((feedback, index) => (
                        <li key={index}>
                            <p>Student: {feedback.student}</p>
                            <p>Course: {feedback.course}</p>
                            <p>Rating: {feedback.rating}</p>
                            <p>Comments: {feedback.comments}</p>
                        </li>
                    ))
                ) : (
                    <p>No feedback available</p>
                )}
            </ul>
        </div>
    );
};

export default ViewFeedback;
