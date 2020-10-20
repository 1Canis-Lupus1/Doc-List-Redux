import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store,persistor} from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react';
import AddDetails from './components/docForm';
import AddTiming from './components/docTiming'; 
import Details from './components/docDetails';
import {AddNewDoc} from './components/addNewDoc';

class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <Router>
        <PersistGate persistor={persistor}>
        <div className="App">
          <Details />
          <Switch>
            <Route path="/addDocDetails" component={AddNewDoc} />
            <Route path="/addDocForm" component={AddDetails} />
            <Route path="/addDocTime" component={AddTiming} />
            {/* <Route path="/showDocList" component={NewDoctorTable} /> */}
          </Switch>
        </div>
        </PersistGate>
      </Router>
    </Provider >
  );
}}

export default App;
