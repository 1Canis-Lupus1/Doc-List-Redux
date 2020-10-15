import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DocForm from './components/docForm';
import DocTime from './components/docTiming';
import DocDisplay from './components/docDisplay';

function App() {
  //Storing Input Values from Doctor Form
  const [docList,setDocList]=useState([]);
  const updateDocs= formData =>{
    setDocList([...docList,formData])
  }
  console.log(docList);

  return (
      <div className="container mt-4">
      <Router>
            Routes:<ol>
              <li>"/form" for Doctor Form</li>
              <li>"/timing" for Doctor Timings</li>
              <li>"/display" for Doctor table Display</li>
            </ol> 
          <Switch>
            {/* Sending props via Route */}
            <Route path="/form" component={()=>(<DocForm updateDocs={updateDocs}/>)} />
            <Route path="/timing" component={DocTime} />
            <Route path="/display" component={()=>(<DocDisplay updateDocs={updateDocs}/>)} />
          </Switch>
      </Router>
      </div>
  );
}

export default App;
