import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AvailableCourses from './AvailableCourses';
import RegisteredCourses from './RegisteredCourses';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={AvailableCourses} />
        <Route path="/registered-courses" component={RegisteredCourses} />
      </div>
    </Router>
  );
}

export default App;