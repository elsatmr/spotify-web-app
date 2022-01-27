import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <HomePage />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
