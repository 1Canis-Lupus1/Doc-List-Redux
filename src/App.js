import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DocForm from './components/docForm';
import DocTime from './components/docTiming';
import DocDisplay from './components/docDisplay';

function App() {
  return (
      <div className="container mt-4">
      <Router>
            Routes:<ol>
              <li>"/form" for Doctor Form</li>
              <li>"/timing" for Doctor Timings</li>
              <li>"/display" for Doctor table Display</li>
            </ol> 
          <Switch>
            <Route path="/form" component={DocForm} />
            <Route path="/timing" component={DocTime} />
            <Route path="/display" component={DocDisplay} />
          </Switch>
      </Router>
      </div>
  );
}

export default App;
