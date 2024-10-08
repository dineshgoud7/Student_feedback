// src/components/Student/CourseList.js
import React, { useState } from 'react';
//import './CourseList.css'; // Import any specific CSS for styling
//import { Link } from 'react-router-dom'; // For navigation



const CourseList = () => {
    // Sample data for demonstration (replace with your actual data)
    const courses = [
        {
            id: 1,
            title: 'Mathematics',
            code: 'MATH101',
            faculty: 'Dr. Smith',
            credits: 3,
            ltps: 'Lecture: 3, Tutorial: 1, Practical: 1',
        },
        {
            id: 2,
            title: 'Physics',
            code: 'PHYS101',
            faculty: 'Dr. Johnson',
            credits: 4,
            ltps: 'Lecture: 3, Tutorial: 1, Practical: 2',
        },
    ];

    const [selectedCourse, setSelectedCourse] = useState(null);
    const [feedback, setFeedback] = useState({
        question1: '',
        question2: '',
        question3: '',
        comments: '',
    });

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
        setFeedback({ question1: '', question2: '', question3: '', comments: '' }); // Reset feedback on new selection
    };

    const handleFeedbackChange = (e) => {
        const { name, value } = e.target;
        setFeedback((prevFeedback) => ({ ...prevFeedback, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Save feedback to the database (pseudo code)
        const response = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...feedback, courseId: selectedCourse.id }),
        });

        if (response.ok) {
            alert('Feedback submitted successfully!');
            setSelectedCourse(null); // Clear selection after submitting feedback
        } else {
            alert('Failed to submit feedback. Please try again.');
        }
    };

    return (
        <div className="course-list">
                       <style>
                {`
                    .course-list {
                        max-width: 900px;
                        margin: 40px auto;
                        padding: 20px;
                        border: 1px solid #;
                        border-radius: 8px;
                        background-color: #;
                        box-shadow: 0 2px 5px rgba(255,255,255,0.5);
                    }

                    .course-list h2 {
                        text-align: center;
                        color: #333;
                    }

                    .course-list ul {
                        list-style-type: none;
                        padding: 0;
                    }

                    .course-list li {
                        padding: 15px;
                        margin: 10px 0;
                        background-color: #fff;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    .course-list li:hover {
                        background-color: #e9e9e9;
                    }

                    .course-details {
                        margin-top: 20px;
                        padding: 15px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        background-color: #fff;
                    }

                    .course-details h3 {
                        margin-top: 0;
                        color: #333;
                    }

                    .course-details p {
                        margin: 5px 0;
                    }

                    .course-details form {
                        margin-top: 15px;
                    }

                    .course-details label {
                        display: block;
                        margin-bottom: 10px;
                    }

                    .course-details textarea {
                        width: 100%;
                        height: 80px;
                        border-radius: 5px;
                        border: 1px solid #ccc;
                        padding: 8px;
                    }

                    .course-details button {
                        margin-top: 10px;
                        padding: 10px 15px;
                        border: none;
                        border-radius: 5px;
                        background-color: #007bff;
                        color: #fff;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    .course-details button:hover {
                        background-color: #0056b3;
                    }
                `}
            </style>

            <h2>Available Courses</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.id} onClick={() => handleCourseClick(course)}>
                        <h3>{course.title}</h3>
                    </li>
                ))}
            </ul>

            {selectedCourse && (
                <div className="course-details">
                    <h3>Course Details</h3>
                    <p>Course Code: {selectedCourse.code}</p>
                    <p>Faculty: {selectedCourse.faculty}</p>
                    <p>Credits: {selectedCourse.credits}</p>
                    <p>LTPs: {selectedCourse.ltps}</p>
                    
                    <h3>Give Feedback</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <p>1. How would you rate the course content?</p>
                            <label>
                                <input
                                    type="radio"
                                    name="question1"
                                    value="Excellent"
                                    checked={feedback.question1 === 'Excellent'}
                                    onChange={handleFeedbackChange}
                                    required
                                />
                                Excellent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="question1"
                                    value="Good"
                                    checked={feedback.question1 === 'Good'}
                                    onChange={handleFeedbackChange}
                                />
                                Good
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="question1"
                                    value="Average"
                                    checked={feedback.question1 === 'Average'}
                                    onChange={handleFeedbackChange}
                                />
                                Average
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="question1"
                                    value="Poor"
                                    checked={feedback.question1 === 'Poor'}
                                    onChange={handleFeedbackChange}
                                />
                                Poor
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="question1"
                                    value="Very Poor"
                                    checked={feedback.question1 === 'Very Poor'}
                                    onChange={handleFeedbackChange}
                                />
                                Very Poor
                            </label>
                        </div>

                        <div>
                            <p>2. How would you rate the instructor's teaching?</p>
                            <label>
                                <input
                                    type="radio"
                                    name="question2"
                                    value="Excellent"
                                    checked={feedback.question2 === 'Excellent'}
                                    onChange={handleFeedbackChange}
                                    required
                                />
                                Excellent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="question2"
                                    value="Good"
                                    checked={feedback.question2 === 'Good'}
                                    onChange={handleFeedbackChange}
                                />
                                Good
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="question2"
                                    value="Average"
                                    checked={feedback.question2 === 'Average'}
                                    onChange={handleFeedbackChange}
                                />
                                Average
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="question2"
                                    value="Poor"
                                    checked={feedback.question2 === 'Poor'}
                                    onChange={handleFeedbackChange}
                                />
                                Poor
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="question2"
                                    value="Very Poor"
                                    checked={feedback.question2 === 'Very Poor'}
                                    onChange={handleFeedbackChange}
                                />
                                Very Poor
                            </label>
                        </div>

                        <div>
                            <p>3. How satisfied are you with the overall course experience?</p>
                            <label>
                                <input
                                    type="radio"
                                    name="question3"
                                    value="Excellent"
                                    checked={feedback.question3 === 'Excellent'}
                                    onChange={handleFeedbackChange}
                                    required
                                />
                                Excellent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="question3"
                                    value="Good"
                                    checked={feedback.question3 === 'Good'}
                                    onChange={handleFeedbackChange}
                                />
                                Good
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="question3"
                                    value="Average"
                                    checked={feedback.question3 === 'Average'}
                                    onChange={handleFeedbackChange}
                                />
                                Average
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="question3"
                                    value="Poor"
                                    checked={feedback.question3 === 'Poor'}
                                    onChange={handleFeedbackChange}
                                />
                                Poor
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="question3"
                                    value="Very Poor"
                                    checked={feedback.question3 === 'Very Poor'}
                                    onChange={handleFeedbackChange}
                                />
                                Very Poor
                            </label>
                        </div>

                        <label>
                            Comments:
                            <textarea
                                name="comments"
                                value={feedback.comments}
                                onChange={handleFeedbackChange}
                                required
                            />
                        </label>
                        <button type="submit">Submit Feedback</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CourseList;
