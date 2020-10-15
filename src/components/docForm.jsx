import React,{useState} from 'react';
import {Row,Col,Form,FormGroup,Input,Label,Button} from 'reactstrap';

const DocForm=()=>{
    //Setting initial state of input fields
    const intialData={name:"",speciality:"",experience:"",fees:"",qualification:"",location:"",lang:"",email:"",phno:"",gender:"",regno:"",specialization:"",supSpecialization:""};
    const [formData,setFormData]=useState(intialData);
    //Destructuring Input Field Values
    const {name,speciality,experience,fees,qualification,location,lang,email,phno,gender,regno,specialization,supSpecialization}=formData;

    return(
        <React.Fragment>
            <Row>
                <Col className="text-center">
                    <h1>Doctor Details:</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <FormGroup>
                            <Label for="name">Doctor Name: </Label>
                            <Input name="name" placeholder="Enter Doctor's Name"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="speciality">Speciality: </Label>
                            <Input name="speciality" ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="experience">Experience: </Label>
                            <Input name="experience" placeholder="Enter Doctor's Experience"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="fees">Consulting Fees: </Label>
                            <Input name="fees" placeholder="Enter Doctor's Fees"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="qualification">Qualification: </Label>
                            <Input name="qualification" placeholder="Enter Doctor's Qualification"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="location">Location: </Label>
                            <Input name="location" placeholder="Enter Doctor's Location"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="lang">Languages: </Label>
                            <Input name="lang" ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email Id: </Label>
                            <Input name="email" placeholder="Enter Doctor's Email"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phno">Contact Number: </Label>
                            <Input name="phno" placeholder="Enter Doctor's Number"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="gender">Gender: </Label>
                            <Input name="gender" ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="regno">Medical Registration Number: </Label>
                            <Input name="regno" placeholder="Enter Doctor's Reistration Number"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="specialization">Specialization: </Label>
                            <Input name="specialization" placeholder="Enter Doctor's Specialization"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="supSpecialization">Super Specialization: </Label>
                            <Input name="supSpecialization" placeholder="Enter Doctor's Super Specialization"></Input>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Col> 
            </Row>
        </React.Fragment>
    )
}

export default DocForm;