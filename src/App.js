import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DocForm from './components/docForm';
import DocTime from './components/docTiming';
import DocDisplay from './components/docDisplay';
import Details from './components/docDetails';
import {Button} from 'reactstrap';
// import {Provider} from 'react-redux';
// import store from './redux/store';

function App() {

  return (
    // <Provider store={store}>
      <div className="container mt-4">
      <Router>
            {/* Routes:<ol>
              <li>"/form" for Doctor Form</li>
              <li>"/timing" for Doctor Timings</li>
              <li>"/display" for Doctor table Display</li>
            </ol>  */}
            <Details />
            <Button style={{color:"white"}}><Link path="/form" to="form">Add New Doctor</Link></Button>
          <Switch>
            {/* Sending props via Route */}
            <Route path="/form" component={()=>(<DocForm />)} />
            <Route path="/timing" component={DocTime} />
            <Route path="/display" component={()=>(<DocDisplay/>)} />
          </Switch>
      </Router>
      </div>
    // </Provider>
  );
}

export default App;
