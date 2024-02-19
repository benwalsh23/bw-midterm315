import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AvailableCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('/api/courses')
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => {
                console.error('Error fetching available courses:', error);
            });
    }, []);

    const handleEnroll = (courseId) => {
        const studentId = '100'; 
        axios.post('/api/register', { studentId, courseId })
            .then(response => {
                alert(response.data.message); 
            })
            .catch(error => {
                console.error('Error enrolling for course:', error);
                alert(error.response.data.message); 
            });
    };

    return (
        <div>
            <h2>Available Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course._id}>
                        {course.courseName} - {course.department} - {course.timeOfDay}
                        <button onClick={() => handleEnroll(course._id)}>Enroll</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AvailableCourses;