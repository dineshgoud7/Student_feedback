import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register all necessary components
Chart.register(...registerables);

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
    },
    header: {
        color: '#333',
        fontSize: '24px',
        marginBottom: '20px',
    },
    message: {
        color: '#888',
        fontSize: '18px',
    },
    pieChart: {
        maxWidth: '30px',
        maxHeight: '30px',
        width: '100%', // Ensures the chart doesn't overflow
        height: '100%',
    }
};

const FeedbackVisualization = () => {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        const fetchFeedbackData = async () => {
            try {
                const data = [
                    { course: 'Math', rating: 4 },
                    { course: 'Science', rating: 5 },
                    { course: 'History', rating: 3 },
                    { course: 'Math', rating: 5 }
                ];
                setFeedbackData(data);
            } catch (error) {
                console.error("Error fetching feedback data", error);
            }
        };

        fetchFeedbackData();
    }, []);

    const courses = feedbackData.map(item => item.course);
    const ratings = feedbackData.map(item => item.rating);

    const data = {
        labels: courses,
        datasets: [
            {
                label: 'Course Ratings',
                data: ratings,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }
        ]
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Feedback Visualization</h2>
            {feedbackData.length > 0 ? (
                <Pie data={data} width={200} height={200} options={{ maintainAspectRatio: false }} />
            ) : (
                <p style={styles.message}>No feedback available to visualize</p>
            )}
        </div>
    );
}

export default FeedbackVisualization;
