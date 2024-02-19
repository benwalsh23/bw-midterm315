import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AvailableCourses from './components/AvailableCourses';
import RegisteredCourses from './components/RegisteredCourses';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={AvailableCourses} />
          <Route path="/registered-courses" component={RegisteredCourses} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;