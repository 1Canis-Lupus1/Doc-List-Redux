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
            practising: "",
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
            practising: false,
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
            practising: true,
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
                    errorMsg.name = "*Field Cannot Be Empty";
                } else if (doctor.name.trim().length &&
                    !doctor.name.match(/^[a-zA-Z ]*$/)
                ) {
                    errorMsg.name = "Invalid Doctor Name";
                } else if (doctor.name.trim().length <= 3) {
                    errorMsg.name = "Name too small";
                }
                else {
                    delete errorMsg[each];
                    isTrue.name = false;
                }
            } else if (each === "experience" && isTrue.experience) {
                if (!doctor.experience.trim().length) {
                    errorMsg.experience = "*Field Cannot Be Empty";
                } else if (!doctor.experience.match(/^[0-9]{1,2}$/)) {
                    errorMsg.experience = "Enter experience (0-99)";
                } else {
                    delete errorMsg[each];
                    isTrue.experience = false;
                }
            } else if (each === "fees" && isTrue.fees) {
                if (!doctor.fees.trim().length) {
                    errorMsg.fees = "*Field Cannot Be Empty";
                } else if (!doctor.fees.match(/^[0-9]{4,5}$/)) {
                    errorMsg.fees = "Enter valid fees(1000-99000)";
                } else {
                    delete errorMsg[each];
                    isTrue.fees = false;
                }
            } else if (each === "qualification" && isTrue.qualification) {
                if (!doctor.qualification.trim().length) {
                    errorMsg.qualification = "*Field Cannot Be Empty";
                } else {
                    delete errorMsg[each];
                    isTrue.qualification = false;
                }
            } else if (each === "practising" && isTrue.practising) {
                if (!doctor.practising.trim().length) {
                    errorMsg.practising = "*Field Cannot Be Empty";
                } else {
                    delete errorMsg[each];
                    isTrue.practising = false;
                }
            } else if (each === "email" && isTrue.email) {
                if (!doctor.email.trim().length) {
                    errorMsg.email = "*Field Cannot Be Empty";
                } else if (!doctor.email.match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)) {
                    errorMsg.email = "Enter valid email";
                } else {
                    delete errorMsg[each];
                    isTrue.email = false;
                }
            } else if (each === "phone" && isTrue.phone) {
                if (!doctor.phone.trim().length) {
                    errorMsg.phone = "*Field Cannot Be Empty";
                } else if (!doctor.phone.match(/^[0-9]{10}$/)) {
                    errorMsg.phone = "Enter valid number";
                } else {
                    delete errorMsg[each];
                    isTrue.phone = false;
                }
            } else if (each === "regno" && isTrue.regno) {
                if (!doctor.regno.trim().length) {
                    errorMsg.regno = "*Field Cannot Be Empty";
                } else {
                    delete errorMsg[each];
                    isTrue.regno = false;
                }
            } else if (each === "specialization" && isTrue.specialization) {
                if (!doctor.specialization.trim().length) {
                    errorMsg.specialization = "*Field Cannot Be Empty";
                } else {
                    delete errorMsg[each];
                    isTrue.specialization = false;
                }
            } else if (each === "superSpecialization" && isTrue.superSpecialization) {
                if (!doctor.superSpecialization.trim().length) {
                    errorMsg.superSpecialization = "*Field Cannot Be Empty";
                } else {
                    delete errorMsg[each];
                    isTrue.superSpecialization = false;
                }
            } else if (each === "speciality" && isTrue.speciality) {
                if (doctor.speciality === "") {
                    errorMsg.speciality = "*Field Cannot Be Empty";
                } else {
                    delete errorMsg[each];
                    isTrue.speciality = false;
                }
            } else if (each === "gender" && isTrue.gender) {
                if (doctor.gender === "") {
                    errorMsg.gender = "*Field Cannot Be Empty";
                } else {
                    delete errorMsg[each];
                    isTrue.gender = false;
                }
            } else if (each === "language" && isTrue.language) {
                if (!doctor.language.length) {
                    errorMsg.language = "*Language cannot be empty";
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
                    <Form onSubmit={this.handleSubmit} className="m-5">
                        <Row form>
                            <Col >
                                <FormGroup>
                                    <Label for="name"><strong>Name</strong></Label>
                                    <Input type="text" name="name" id="name"
                                        placeholder="Enter Name"
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
                                    <Label for="speciality"><strong>Speciality</strong></Label>
                                    <Row form>
                                        <select style={{height: "38px", width: "300px" }}
                                            value={this.state.doctor.speciality}
                                            onChange={(e) => this.handleChange("speciality", e.target.value)}>
                                            <option></option>
                                            <option value="psychiatrist">Psychiatrist</option>
                                            <option value="Endocrinologist">Endocrinologist</option>
                                            <option value="Urologist">Urologist</option>
                                            <option value="Cardiology">Cardiology</option>
                                            <option value="Dermatologist">Dermatologist</option>
                                            <option value="Gastroenterologist">Gastroenterologist</option>
                                            <option value="General Surgeon">General Surgeon</option>
                                            <option value="Gynaecology">Gynaecology</option>
                                            <option value="Pediatrician">Pediatrician</option>
                                            <option value="Orthopedic">Orthopedic</option>
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
                                    <Label for="experience"><strong>Experience</strong></Label>
                                    <Input type="number" name="experience" id="experience" placeholder="Enter Experience"
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
                                    <Label for="fees"><strong>Consult Fees</strong></Label>
                                    <Input type="number" name="fees" id="fees" placeholder="Enter Consulting fees"
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
                                    <Label for="qualification"><strong>Qualification</strong></Label>
                                    <Input type="text" name="qualification" id="qualification" placeholder="Enter Qualification"
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
                                    <Label for="practising"><strong>Location</strong></Label>
                                    <Input type="text" name="practising" id="practising" placeholder="Enter practising"
                                        value={this.state.doctor.practising}
                                        onChange={(e) => this.handleChange('practising', e.target.value)}
                                    />
                                    {this.state.errorMsg && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errorMsg.practising}
                                        </small>
                                    )}
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="languages"><strong>Languages</strong></Label>
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
                                    <Label for="email"><strong>Email</strong></Label>
                                    <Input type="email" name="email" id="email" placeholder="Enter Email-Id"
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
                                    <Label for="phone"><strong>Contact</strong></Label>
                                    <Input type="number" name="phone" id="phone" placeholder="Enter Contact Number"
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
                                    <Label for="gender"><strong>Gender</strong></Label>
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
                                        <Col md={2} style={{ paddingLeft: "40px" }}>
                                            <div>
                                                <Input type="radio" value="Female" name="gender"
                                                    onChange={(e) => this.handleChange('gender', e.target.value)}
                                                />
                                                <Label for="female">Female</Label>
                                            </div>
                                        </Col>
                                        <Col md={2} style={{ paddingLeft: "80px" }}>
                                            <div>
                                                <Input type="radio" value="Others" name="gender"
                                                    onChange={(e) => this.handleChange('gender', e.target.value)}
                                                />
                                                <Label for="Others">Others</Label>
                                            </div>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="regno"><strong>Medical Registration Number</strong></Label>
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
                                    <Label for="specialization"><strong>Specialization</strong></Label>
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
                                    <Label for="superSpecialization"><strong>Super-Specialization</strong></Label>
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
    console.log("docForm",state);
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