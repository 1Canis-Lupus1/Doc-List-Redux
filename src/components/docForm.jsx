import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux";
import { addFormData } from '../redux/actions';

class AddDetails extends Component {

    state = {
        doctor: {
            name: "",
            experience: "",
            fees: "",
            qualification: "",
            location: "",
            language: [],
            email: "",
            phone: "",
            regno: "",
            gender: "",
            speciality: "",
            specialization: "",
            superSpecialization: ""
        },
        isTrue: {
            name: false,
            experience: false,
            fees: false,
            qualification: false,
            location: false,
            language: false,
            email: false,
            phone: false,
            regno: false,
            specialization: false,
            superSpecialization: false,
            gender: false,
            speciality: false
        },
        errorMsg: {},
        redirect: false
    }

    handleChange = (field, value) => {
        const { doctor, isTrue } = this.state;
        if (field === 'language') {
            if (value.checked) {
                doctor[field].push(value.value);
            } else {
                doctor[field].splice(doctor[field].indexOf(value.value), 1);
            }
        } else {
            doctor[field] = value;
        }
        isTrue[field] = true;
        this.setState({ doctor, isTrue }, () => {
            this.validation();
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let isTrue = {
            name: true,
            experience: true,
            fees: true,
            qualification: true,
            location: true,
            language: true,
            email: true,
            phone: true,
            regno: true,
            gender: true,
            speciality: true,
            specialization: true,
            superSpecialization: true
        };
        this.setState({ isTrue }, () => {
            let errorMsg = this.validation();
            console.log(errorMsg);
            if (!errorMsg) {
                const doctorForm = this.state.doctor;
                this.props.addFormData({ doctorForm });
                this.setState({
                    redirect: true
                });
            }
        });
    };

    validation = () => {
        const { doctor, errorMsg, isTrue } = this.state;
        Object.keys(doctor).forEach((each) => {
            if (each === "name" && isTrue.name) {
                if (!doctor.name.trim().length) {
                    errorMsg.name = "*Required";
                } else if (doctor.name.trim().length &&
                    !doctor.name.match(/^[a-zA-Z ]*$/)
                ) {
                    errorMsg.name = "Invalid name format";
                } else if (doctor.name.trim().length <= 3) {
                    errorMsg.name = "Name should be greater than 3 characters";
                }
                else {
                    delete errorMsg[each];
                    isTrue.name = false;
                }
            } else if (each === "experience" && isTrue.experience) {
                if (!doctor.experience.trim().length) {
                    errorMsg.experience = "*Required";
                } else if (!doctor.experience.match(/^[0-9]{1,2}$/)) {
                    errorMsg.experience = "Enter valid experience in years";
                } else {
                    delete errorMsg[each];
                    isTrue.experience = false;
                }
            } else if (each === "fees" && isTrue.fees) {
                if (!doctor.fees.trim().length) {
                    errorMsg.fees = "*Required";
                } else if (!doctor.fees.match(/^[0-9]{4}$/)) {
                    errorMsg.fees = "Enter valid amount";
                } else {
                    delete errorMsg[each];
                    isTrue.fees = false;
                }
            } else if (each === "qualification" && isTrue.qualification) {
                if (!doctor.qualification.trim().length) {
                    errorMsg.qualification = "*Required";
                } else {
                    delete errorMsg[each];
                    isTrue.qualification = false;
                }
            } else if (each === "location" && isTrue.location) {
                if (!doctor.location.trim().length) {
                    errorMsg.location = "*Required";
                } else {
                    delete errorMsg[each];
                    isTrue.location = false;
                }
            } else if (each === "email" && isTrue.email) {
                if (!doctor.email.trim().length) {
                    errorMsg.email = "*Required";
                } else if (!doctor.email.match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)) {
                    errorMsg.email = "Invalid Email";
                } else {
                    delete errorMsg[each];
                    isTrue.email = false;
                }
            } else if (each === "phone" && isTrue.phone) {
                if (!doctor.phone.trim().length) {
                    errorMsg.phone = "*Required";
                } else if (!doctor.phone.match(/^[0-9]{10}$/)) {
                    errorMsg.phone = "Enter valid phone number";
                } else {
                    delete errorMsg[each];
                    isTrue.phone = false;
                }
            } else if (each === "regno" && isTrue.regno) {
                if (!doctor.regno.trim().length) {
                    errorMsg.regno = "*Required";
                } else {
                    delete errorMsg[each];
                    isTrue.regno = false;
                }
            } else if (each === "specialization" && isTrue.specialization) {
                if (!doctor.specialization.trim().length) {
                    errorMsg.specialization = "*Required";
                } else {
                    delete errorMsg[each];
                    isTrue.specialization = false;
                }
            } else if (each === "superSpecialization" && isTrue.superSpecialization) {
                if (!doctor.superSpecialization.trim().length) {
                    errorMsg.superSpecialization = "*Required";
                } else {
                    delete errorMsg[each];
                    isTrue.superSpecialization = false;
                }
            } else if (each === "speciality" && isTrue.speciality) {
                if (doctor.speciality === "") {
                    errorMsg.speciality = "*Required";
                } else {
                    delete errorMsg[each];
                    isTrue.speciality = false;
                }
            } else if (each === "gender" && isTrue.gender) {
                if (doctor.gender === "") {
                    errorMsg.gender = "*Required";
                } else {
                    delete errorMsg[each];
                    isTrue.gender = false;
                }
            } else if (each === "language" && isTrue.language) {
                if (!doctor.language.length) {
                    errorMsg.language = "*Required atleast one language";
                } else {
                    delete errorMsg[each];
                    isTrue.language = false;
                }
            }
        });
        this.setState({ errorMsg });
        return Object.keys(errorMsg).length ? errorMsg : null;
    }

    render() {
        return (
            <React.Fragment>
            <div className="doctorForm">
                {this.state.redirect ? <Redirect to={{
                    pathname: '/addDocTime'
                }} /> : ''}
                <Col className="text-center">
                    <hr/><hr/>
                    <h1>New Doctor Form :</h1>
                    <hr/><hr/>
                </Col>
                    <Form onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col >
                                <FormGroup>
                                    <Label for="fullName">Name</Label>
                                    <Input type="text" name="fullName" id="fullName"
                                        placeholder="Enter full name"
                                        value={this.state.doctor.name}
                                        onChange={(e) => this.handleChange('name', e.target.value)}
                                    />
                                    {this.state.errorMsg && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errorMsg.name}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                            <Col >
                                <FormGroup>
                                    <Label for="speciality">Speciality</Label>
                                    <Row form>
                                        <select style={{ marginLeft: "60px", height: "30px", width: "300px" }}
                                            value={this.state.doctor.speciality}
                                            onChange={(e) => this.handleChange("speciality", e.target.value)}
                                        >
                                            <option></option>
                                            <option value="Dermatologists">Dermatologists</option>
                                            <option value="General Surgeons">General Surgeons</option>
                                            <option value="Cardiology">Cardiology</option>
                                            <option value="Endocrinologists">Endocrinologists</option>
                                            <option value="Gastroenterologists">Gastroenterologists</option>
                                            <option value="Urologists">Urologists</option>
                                            <option value="Gynaecology">Gynaecology</option>
                                            <option value="Pediatrician">Pediatrician</option>
                                            <option value="Orthopedic">Orthopedic</option>
                                            <option value="optho">optho</option>
                                            <option value="psychiatrist">psychiatrist</option>
                                            <option value="dietiance">dietiance</option>
                                            <option value="fcece">fcece</option>
                                            <option value="Test">Test</option>
                                        </select>
                                        {this.state.errorMsg && (
                                            <small style={{ color: "red" }}>
                                                {this.state.errorMsg.speciality}
                                            </small>
                                        )}
                                    </Row>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col >
                                <FormGroup>
                                    <Label for="experience">Experience</Label>
                                    <Input type="number" name="experience" id="experience" placeholder="Enter experience in years"
                                        value={this.state.doctor.experience}
                                        onChange={(e) => this.handleChange('experience', e.target.value)}
                                    />
                                    {this.state.errorMsg && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errorMsg.experience}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                            <Col >
                                <FormGroup>
                                    <Label for="fees">Consult Fees</Label>
                                    <Input type="number" name="fees" id="fees" placeholder="Enter fees"
                                        value={this.state.doctor.fees}
                                        onChange={(e) => this.handleChange('fees', e.target.value)}
                                    />
                                    {this.state.errorMsg && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errorMsg.fees}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col >
                                <FormGroup>
                                    <Label for="qualification">Qualification</Label>
                                    <Input type="text" name="qualification" id="qualification" placeholder="Enter qualification"
                                        value={this.state.doctor.qualification}
                                        onChange={(e) => this.handleChange('qualification', e.target.value)}
                                    />
                                    {this.state.errorMsg && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errorMsg.qualification}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                            <Col >
                                <FormGroup>
                                    <Label for="location">location At</Label>
                                    <Input type="text" name="location" id="location" placeholder="Enter location at"
                                        value={this.state.doctor.location}
                                        onChange={(e) => this.handleChange('location', e.target.value)}
                                    />
                                    {this.state.errorMsg && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errorMsg.location}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="languages">Languages</Label>
                            <Row form>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Hindi"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="hindi" check>Hindi</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="English"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="english" check>English</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Bengali"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="bengali" check>Bengali</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Oriya"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="oriya" check>Oriya</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Assamese"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="assamese" check>Assamese</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Gujrati"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="gujrati" check>Gujrati</Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Marathi"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="marathi" check>Marathi</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Telugu"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="telugu" check>Telugu</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Tamil"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="tamil" check>Tamil</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Punjabi"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="punjabi" check>Punjabi</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Malayalam"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="malayalam" check>Malayalam</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup check>
                                        <Input type="checkbox"
                                            value="Kannada"
                                            onChange={(e) => this.handleChange('language', e.target)}
                                        />
                                        <Label for="kannada" check>Kannada</Label>
                                    </FormGroup>
                                </Col>
                                {this.state.errorMsg && (
                                    <small style={{ color: "red" }}>
                                        {this.state.errorMsg.language}
                                    </small>
                                )}
                            </Row>
                        </FormGroup>
                        <Row form>
                            <Col >
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Enter email"
                                        value={this.state.doctor.email}
                                        onChange={(e) => this.handleChange('email', e.target.value)}
                                    />
                                    {this.state.errorMsg && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errorMsg.email}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                            <Col >
                                <FormGroup>
                                    <Label for="phone">Phone</Label>
                                    <Input type="number" name="phone" id="phone" placeholder="Enter phone number"
                                        value={this.state.doctor.phone}
                                        onChange={(e) => this.handleChange('phone', e.target.value)}
                                    />
                                    {this.state.errorMsg && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errorMsg.phone}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col className="gender">
                                <FormGroup>
                                    <Label for="gender">Gender</Label>
                                    {this.state.errorMsg && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errorMsg.gender}
                                        </small>
                                    )}
                                    <Row>
                                        <Col md={2} style={{ marginLeft: "120px" }}>
                                            <div>
                                                <Input type="radio" value="Male" name="gender"
                                                    onChange={(e) => this.handleChange('gender', e.target.value)}
                                                />
                                                <Label for="male">Male</Label>
                                            </div>
                                        </Col>
                                        <Col md={2} style={{ paddingLeft: "80px" }}>
                                            <div>
                                                <Input type="radio" value="Female" name="gender"
                                                    onChange={(e) => this.handleChange('gender', e.target.value)}
                                                />
                                                <Label for="female">Female</Label>
                                            </div>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="regno">Medical Registration Number</Label>
                                    <Input type="text" name="regno" id="regno" placeholder="Enter Medical registration number"
                                        value={this.state.doctor.regno}
                                        onChange={(e) => this.handleChange('regno', e.target.value)}
                                    />
                                    {this.state.errorMsg && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errorMsg.regno}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="specialization">Specialization</Label>
                                    <Input type="text" name="specialization" id="specialization" placeholder="Enter specialization"
                                        value={this.state.doctor.specialization}
                                        onChange={(e) => this.handleChange('specialization', e.target.value)}
                                    />
                                    {this.state.errorMsg && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errorMsg.specialization}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col>
                                <FormGroup>
                                    <Label for="superSpecialization">Super Specialization</Label>
                                    <Input type="text" name="superSpecialization" id="superSpecialization" placeholder="Enter super specialization"
                                        value={this.state.doctor.superSpecialization}
                                        onChange={(e) => this.handleChange('superSpecialization', e.target.value)}
                                    />
                                    {this.state.errorMsg && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errorMsg.superSpecialization}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button type="submit">SAVE DATA</Button>
                    </Form>
                </div>
        </React.Fragment>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formState: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addFormData: (doctorForm) => dispatch(addFormData(doctorForm))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDetails);