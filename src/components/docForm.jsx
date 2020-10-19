import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DocTime from './docTiming';
import { actionCreators } from '../redux/actionTypes';

const DocForm = () => {

    //Setting initial state of input fields
    const intialData = { name: "", speciality: "", experience: "", fees: "", qualification: "", location: "", lang: "", email: "", phno: "", gender: "", regno: "", specialization: "", supSpecialization: "" };
    const [formData, setFormData] = useState(intialData);

    //Destructuring Input Field Values
    const { name, speciality, experience, fees, qualification, location, lang, email, phno, gender, regno, specialization, supSpecialization } = formData;

    console.log("DOCFORM:",formData);

    //Handling Input Field Value Change
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: [e.target.value] });
        // console.log(formData);
    }

    //Handling Form Submission
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);//Send this value to redux store
    }

    return (
        <React.Fragment>
            <Row>
                <Col className="text-center">
                    <hr/><hr/>
                    <h1>Doctor Form :</h1>
                    <hr/><hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <Label for="name">Doctor Name: </Label>
                            <Input name="name" placeholder="Enter Doctor's Name" value={name} onChange={handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="speciality">Speciality: </Label>
                            <Input type="select" name="speciality" id="exampleSelect">
                                <option>speciality 1</option>
                                <option>speciality 2</option>
                                <option>speciality 3</option>
                                <option>speciality 4</option>
                                <option>speciality 5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="experience">Experience: </Label>
                            <Input name="experience" placeholder="Enter Doctor's Experience" value={experience} onChange={handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="fees">Consulting Fees: </Label>
                            <Input name="fees" placeholder="Enter Doctor's Fees" value={fees} onChange={handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="qualification">Qualification: </Label>
                            <Input name="qualification" placeholder="Enter Doctor's Qualification" value={qualification} onChange={handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="location">Location: </Label>
                            <Input name="location" placeholder="Enter Doctor's Location" value={location} onChange={handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="lang">Languages: </Label>
                            <Input name="lang" value={lang} onChange={handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email Id: </Label>
                            <Input name="email" placeholder="Enter Doctor's Email" value={email} onChange={handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phno">Contact Number: </Label>
                            <Input name="phno" placeholder="Enter Doctor's Number" value={phno} onChange={handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="gender">Gender: </Label>
                            <Input name="gender" value={gender} onChange={handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="regno">Medical Registration Number: </Label>
                            <Input name="regno" placeholder="Enter Doctor's Reistration Number" value={regno} onChange={handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="specialization">Specialization: </Label>
                            <Input name="specialization" placeholder="Enter Doctor's Specialization" value={specialization} onChange={handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="supSpecialization">Super Specialization: </Label>
                            <Input name="supSpecialization" placeholder="Enter Doctor's Super Specialization" value={supSpecialization} onChange={handleChange}></Input>
                        </FormGroup>
                        <Router>
                            <Button style={{color:"white"}} onClick={handleSubmit}><Link path="/timing" to="timing">Add Timings</Link></Button>
                            <Switch>
                                <Route path="/timing" component={DocTime} />
                            </Switch>
                        </Router>
                    </Form>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DocForm;