import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RegisteredCourses() {
    const [registeredCourses, setRegisteredCourses] = useState([]);

    useEffect(() => {
        const studentId = '100';
        axios.get(`/api/registered-courses/${studentId}`)
            .then(response => {
                setRegisteredCourses(response.data);
            })
            .catch(error => {
                console.error('Error fetching registered courses:', error);
            });
    }, []);

    return (
        <div>
            <h2>Registered Courses</h2>
            <ul>
                {registeredCourses.map(course => (
                    <li key={course._id}>{course.courseName} - {course.department} - {course.timeOfDay}</li>
                ))}
            </ul>
        </div>
    );
}

export default RegisteredCourses;