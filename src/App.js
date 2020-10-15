import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DocForm from './components/docForm';
import DocTime from './components/docTiming';
import DocDisplay from './components/docDisplay';

function App() {
  return (
    <Router>
          Routes:<ol>
            <li>"/form" for Doctor Form</li>
            <li>"/timing" for Doctor Timings</li>
            <li>"/display" for Doctor table Display</li>
          </ol> 
      <div className="App">
        <Switch>
          <Route path="/display" component={DocDisplay} />
          <Route path="/timing" component={DocTime} />
          <Route path="/form" component={DocForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
