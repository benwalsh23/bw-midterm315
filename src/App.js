import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import AvailableCourses from './AvailableCourses';
import RegisteredCourses from './RegisteredCourses';

function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<AvailableCourses />} /> 
        <Route path="/registered-courses" element={<RegisteredCourses />} /> 
      </Routes>
    </Router>
  );
}

export default App;