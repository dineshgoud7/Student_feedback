import React, { useState } from 'react';

const GiveFeedback = () => {
    // Predefined questions
    const questions = [
        "How was the course content?",
        "How would you rate the instructor's teaching?",
        "How satisfied are you with the course structure?",
        "How effective were the assignments and exams?",
        "Would you recommend this course to others?"
    ];

    // State to manage the feedback for each question
    const [feedback, setFeedback] = useState(
        questions.map(() => ({ rating: '', comments: '' }))
    );

    // Handler to update rating for a specific question
    const handleRatingChange = (index, value) => {
        const newFeedback = [...feedback];
        newFeedback[index].rating = value;
        setFeedback(newFeedback);
    };

    // Handler to update comments for a specific question
    const handleCommentsChange = (index, value) => {
        const newFeedback = [...feedback];
        newFeedback[index].comments = value;
        setFeedback(newFeedback);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(feedback);
        alert('Thank you for your feedback!');
        setFeedback(questions.map(() => ({ rating: '', comments: '' }))); // Reset feedback form
    };

    return (
        <div>
            <h2>Give Feedback</h2>
            <form onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div key={index}>
                        <h4>{question}</h4>
                        <label>
                            Rating (1-5):
                            <input 
                                type="number" 
                                value={feedback[index].rating} 
                                onChange={(e) => handleRatingChange(index, e.target.value)} 
                                min="1" 
                                max="5" 
                                required 
                            />
                        </label>
                        <br />
                        <label>
                            Comments:
                            <textarea
                                value={feedback[index].comments}
                                onChange={(e) => handleCommentsChange(index, e.target.value)}
                                required
                            />
                        </label>
                    </div>
                ))}
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
}

export default GiveFeedback;
