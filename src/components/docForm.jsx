import React,{useState} from 'react';
import {Row,Col,Form,FormGroup,Input,Label,Button} from 'reactstrap';

const DocForm=(props)=>{
    //Destructuring props
    const {updateDocs}=props;

    //Setting initial state of input fields
    const intialData={name:"",speciality:"",experience:"",fees:"",qualification:"",location:"",lang:"",email:"",phno:"",gender:"",regno:"",specialization:"",supSpecialization:""};
    const [formData,setFormData]=useState(intialData);

    //Destructuring Input Field Values
    const {name,speciality,experience,fees,qualification,location,lang,email,phno,gender,regno,specialization,supSpecialization}=formData;

    //Handling Input Field Value Change
    const handleChange=e=>{
        setFormData({...formData,[e.target.name]:[e.target.value]});
        // console.log(formData);
    }

    //Handling Form Submission
    const handleSubmit=e=>{
        // console.log(formData);
        updateDocs(formData);
    }

    return(
        <React.Fragment>
            <Row>
                <Col className="text-center">
                    <h1>Doctor Details :</h1>
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
                            <Input name="speciality" value={speciality} onChange={handleChange}></Input>
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
                        <Button onClick={handleSubmit}>Submit</Button>
                    </Form>
                </Col> 
            </Row>
        </React.Fragment>
    )
}

export default DocForm;