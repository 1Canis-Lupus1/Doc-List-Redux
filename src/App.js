import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import DocForm from './components/docForm';
// import Details from './components/docDetails';
// import {Button} from 'reactstrap';
import {Provider} from 'react-redux';
import {store,persistor} from "./redux/store";
import {PersistGate} from 'redux-persist/integration.react';

class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <div className="container mt-4">
      <Router>
        <PersistGate persistor={persistor}>
            {/* Routes:<ol>
              <li>"/form" for Doctor Form</li>
              <li>"/timing" for Doctor Timings</li>
              <li>"/display" for Doctor table Display</li>
            </ol>  */}
            <Details />
            <Button style={{color:"white"}}><Link path="/form" to="form">Add New Doctor</Link></Button>
          <Switch>
            <Route path="/form" component={()=>(<DocForm />)} />
          </Switch>
        </PersistGate>
      </Router>
      </div>
    </Provider>
  );
}}

// const mapStateToProps=state=>{
//   return{
//     docData: state.docData
//   }
//   console.log("Data From Store:",this.props.docData)
// }

export default App;
