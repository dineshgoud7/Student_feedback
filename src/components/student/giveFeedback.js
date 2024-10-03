// src/components/Student/GiveFeedback.js
import React, { useState } from 'react';

const GiveFeedback = () => {
    const [course, setCourse] = useState('');
    const [rating, setRating] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ course, rating, comments });
        alert('Thank you for your feedback!');
        setCourse('');
        setRating('');
        setComments('');
    };

    return (
        <div>
            <h2>Give Feedback</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Course:
                    <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} required />
                </label>
                <label>
                    Rating:
                    <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" required />
                </label>
                <label>
                    Comments:
                    <textarea value={comments} onChange={(e) => setComments(e.target.value)} required></textarea>
                </label>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
}

export default GiveFeedback;
