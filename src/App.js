import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DocForm from './components/docForm';
import Details from './components/docDetails';
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import { render } from '@testing-library/react';

class App extends Component {
  render(){
    // console.log("Data From Store:",this.props.docData);
  return (
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
          </Switch>
      </Router>
      </div>
  );
}}

// const mapStateToProps=state=>{
//   return{
//     docData: state.docData
//   }
//   console.log("Data From Store:",this.props.docData)
// }

export default App;
