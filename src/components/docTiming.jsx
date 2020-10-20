import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label } from 'reactstrap';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { addTimeData, addTableData } from '../redux/actions';

class AddTiming extends Component {

    state = {
        //Default Input select box values 
        inputTime: [
            { time: "8:00 AM", value: 8 }, { time: "9:00 AM", value: 9 }, { time: "10:00 AM", value: 10 }, { time: "11:00 AM", value: 11 }, { time: "12:00 PM", value: 12 },
            { time: "1:00 PM", value: 13 }, { time: "2:00 PM", value: 14 }, { time: "3:00 PM", value: 15 }, { time: "4:00 PM", value: 16 }, { time: "5:00 PM", value: 17 },
            { time: "6:00 PM", value: 18 }, { time: "7:00 PM", value: 19 }, { time: "8:00 PM", value: 20 }, { time: "9:00 PM", value: 21 }, { time: "10:00 PM", value: 22 }
        ],

        //Storing data in respective weekDay array
        days: {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: []
        },
        //Flag
        isTrue: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        },
        errors: {},
        //Set true inside the setState method
        redirect: false
    }
    
    handleChange = (e, index, day) => {
        e.preventDefault();
        const { days, isTrue } = this.state;
        const { name, value } = e.target;
        const selectBox = this.state.days[day];
        const newselectBox = [...selectBox];
        newselectBox[index][name] = value;
        isTrue[day] = true;
        this.setState({ days, isTrue }, () => {
                this.validation();
            });
        }

    handleSubmit = (e) => {
        e.preventDefault();
        let isTrue = {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: true,
            sunday: true
        };
        this.setState({ isTrue }, () => {
            let errors = this.validation();
            console.log(errors);
            if (!errors) {
                const docTime = this.state.days;
                this.props.addTimeData({ docTime });
                const data = this.props.formState.user;
                this.props.addTableData({ data });
                this.setState({
                    redirect: true
                });
            }
        });
    }


    validation = () => {
        //Destructuring state
        const { days, errors, isTrue, inputTime } = this.state;
        Object.keys(days).forEach((val) => {
            for (let stateVal of days[val]) {
                for (let selectVal of inputTime) {
                    if (stateVal.startTime === selectVal.time) {
                        stateVal.startTime = selectVal.value;
                    } else if (stateVal.endTime === selectVal.time) {
                        stateVal.endTime = selectVal.value;
                    }
                }
            }
            //MONDAY
            if (val === "monday" && isTrue.monday) {
                days[val].forEach((key, index) => {
                    if (key.startTime === "" || key.endTime === "") {
                        errors.monday = "*In-Valid Time Solt Selected";
                    } else if (key.startTime > key.endTime) {
                        errors.monday = "Start time should always be less than End time!!";
                    }
                    else if(key.startTime === key.endTime){
                        errors.monday="*Time Solts cannot be equal"
                    } 
                    else {
                        if (days[val][index + 1]) {
                            if (days[val][index].endTime > days[val][index + 1].startTime) {
                                errors.monday = 'ERROR';
                            }
                        } else {
                            delete errors[val];
                            isTrue.monday = false;
                            for (let stateVal of days[val]) {
                                for (let selectVal of inputTime) {
                                    if (stateVal.startTime === selectVal.value) {
                                        stateVal.startTime = selectVal.time;
                                    } else if (stateVal.endTime === selectVal.value) {
                                        stateVal.endTime = selectVal.time;
                                    }
                                }
                            }
                        }
                    }
                });
            }
            //TUESDAY
            else if (val === "tuesday" && isTrue.tuesday) {
                days[val].forEach((key, index) => {
                    if (key.startTime === "" || key.endTime === "") {
                        errors.tuesday = "*In-Valid Time Solt Selected";
                    } else if (key.startTime > key.endTime) {
                        errors.tuesday = "Start time should always be less than End time!!";
                    }else if(key.startTime === key.endTime){
                        errors.tuesday="*Time Solts cannot be equal"
                    } 
                    else {
                        if (days[val][index + 1]) {
                            if (days[val][index].endTime > days[val][index + 1].startTime) {
                                errors.tuesday = 'ERROR';
                            }
                        } else {
                            delete errors[val];
                            isTrue.tuesday = false;
                            for (let stateVal of days[val]) {
                                for (let selectVal of inputTime) {
                                    if (stateVal.startTime === selectVal.value) {
                                        stateVal.startTime = selectVal.time;
                                    } else if (stateVal.endTime === selectVal.value) {
                                        stateVal.endTime = selectVal.time;
                                    }
                                }
                            }
                        }
                    }
                });
            }
            //WEDNESDAY
            else if (val === "wednesday" && isTrue.wednesday) {
                days[val].forEach((key, index) => {
                    if (key.startTime === "" || key.endTime === "") {
                        errors.wednesday = "*In-Valid Time Solt Selected";
                    } else if (key.startTime > key.endTime) {
                        errors.wednesday = "Start time should always be less than End time!!";
                    }else if(key.startTime === key.endTime){
                        errors.wednesday="*Time Solts cannot be equal"
                    } 
                    else {
                        if (days[val][index + 1]) {
                            if (days[val][index].endTime > days[val][index + 1].startTime) {
                                errors.wednesday = 'ERROR';
                            }
                        } else {
                            delete errors[val];
                            isTrue.wednesday = false;
                            for (let stateVal of days[val]) {
                                for (let selectVal of inputTime) {
                                    if (stateVal.startTime === selectVal.value) {
                                        stateVal.startTime = selectVal.time;
                                    } else if (stateVal.endTime === selectVal.value) {
                                        stateVal.endTime = selectVal.time;
                                    }
                                }
                            }
                        }
                    }
                });
            }
            //THRUSDAY
            else if (val === "thursday" && isTrue.thursday) {
                days[val].forEach((key, index) => {
                    if (key.startTime === "" || key.endTime === "") {
                        errors.thursday = "*In-Valid Time Solt Selected";
                    } else if (key.startTime > key.endTime) {
                        errors.thursday = "Start time should always be less than End time!!";
                    }else if(key.startTime === key.endTime){
                        errors.thrusday="Start and End Time cannot be equal"
                    } 
                    else {
                        if (days[val][index + 1]) {
                            if (days[val][index].endTime > days[val][index + 1].startTime) {
                                errors.thursday = 'ERROR';
                            }
                        } else {
                            delete errors[val];
                            isTrue.thursday = false;
                            for (let stateVal of days[val]) {
                                for (let selectVal of inputTime) {
                                    if (stateVal.startTime === selectVal.value) {
                                        stateVal.startTime = selectVal.time;
                                    } else if (stateVal.endTime === selectVal.value) {
                                        stateVal.endTime = selectVal.time;
                                    }
                                }
                            }
                        }
                    }
                });
            }
            //FRIDAY
            else if (val === "friday" && isTrue.friday) {
                days[val].forEach((key, index) => {
                    if (key.startTime === "" || key.endTime === "") {
                        errors.friday = "*In-Valid Time Solt Selected";
                    } else if (key.startTime > key.endTime) {
                        errors.friday = "Start time should always be less than End time!!";
                    }else if(key.startTime === key.endTime){
                        errors.friday="*Time Solts cannot be equal"
                    } 
                    else {
                        if (days[val][index + 1]) {
                            if (days[val][index].endTime > days[val][index + 1].startTime) {
                                errors.friday = 'ERROR';
                            }
                        } else {
                            delete errors[val];
                            isTrue.friday = false;
                            for (let stateVal of days[val]) {
                                for (let selectVal of inputTime) {
                                    if (stateVal.startTime === selectVal.value) {
                                        stateVal.startTime = selectVal.time;
                                    } else if (stateVal.endTime === selectVal.value) {
                                        stateVal.endTime = selectVal.time;
                                    }
                                }
                            }
                        }
                    }
                });
            }
            //SATURDAY
            else if (val === "saturday" && isTrue.saturday) {
                days[val].forEach((key, index) => {
                    if (key.startTime === "" || key.endTime === "") {
                        errors.saturday = "Fields should not be empty";
                    } else if (key.startTime > key.endTime) {
                        errors.saturday = "Start time should always be less than End time!!";
                    }else if(key.startTime === key.endTime){
                        errors.saturday="*Time Solts cannot be equal"
                    } 
                    else {
                        if (days[val][index + 1]) {
                            if (days[val][index].endTime > days[val][index + 1].startTime) {
                                errors.saturday = 'ERROR';
                            }
                        } else {
                            delete errors[val];
                            isTrue.saturday = false;
                            for (let stateVal of days[val]) {
                                for (let selectVal of inputTime) {
                                    if (stateVal.startTime === selectVal.value) {
                                        stateVal.startTime = selectVal.time;
                                    } else if (stateVal.endTime === selectVal.value) {
                                        stateVal.endTime = selectVal.time;
                                    }
                                }
                            }
                        }
                    }
                });
            }
            //SUNDAY
            else if (val === "sunday" && isTrue.sunday) {
                days[val].forEach((key, index) => {
                    if (key.startTime === "" || key.endTime === "") {
                        errors.sunday = "*In-Valid Time Solt Selected";
                    } else if (key.startTime > key.endTime) {
                        errors.sunday = "Start time should always be less than End time!!";
                    }else if(key.startTime === key.endTime){
                        errors.sunday="*Time Solts cannot be equal"
                    } 
                    else {
                        if (days[val][index + 1]) {
                            if (days[val][index].endTime > days[val][index + 1].startTime) {
                                errors.sunday = 'ERROR';
                            }
                        } else {
                            delete errors[val];
                            isTrue.sunday = false;
                            for (let stateVal of days[val]) {
                                for (let selectVal of inputTime) {
                                    if (stateVal.startTime === selectVal.value) {
                                        stateVal.startTime = selectVal.time;
                                    } else if (stateVal.endTime === selectVal.value) {
                                        stateVal.endTime = selectVal.time;
                                    }
                                }
                            }
                        }
                    }
                })
            }
        });
        this.setState({ errors });
        return Object.keys(errors).length ? errors : null;
    }

    addSelectField = (e, day) => {
        e.preventDefault()
        const selectBox = this.state.days[day];
        const newselectBox = [...selectBox, { startTime: "", endTime: "" }]
        if (day === "monday") {
            this.setState({
                days: {
                    monday: newselectBox,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "tuesday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: newselectBox,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "wednesday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: newselectBox,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "thursday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: newselectBox,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "friday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: newselectBox,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "saturday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: newselectBox,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "sunday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: newselectBox
                }
            });
        }
    }

    deleteSelectField = (e, index, day) => {
        e.preventDefault();
        const selectBox = this.state.days[day];
        const newselectBox = [...selectBox];
        newselectBox.splice(index, 1);
        if (day === "monday") {
            this.setState({
                days: {
                    monday: newselectBox,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "tuesday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: newselectBox,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "wednesday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: newselectBox,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "thursday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: newselectBox,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "friday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: newselectBox,
                    saturday: this.state.days.saturday,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "saturday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: newselectBox,
                    sunday: this.state.days.sunday
                }
            });
        } else if (day === "sunday") {
            this.setState({
                days: {
                    monday: this.state.days.monday,
                    tuesday: this.state.days.tuesday,
                    wednesday: this.state.days.wednesday,
                    thursday: this.state.days.thursday,
                    friday: this.state.days.friday,
                    saturday: this.state.days.saturday,
                    sunday: newselectBox
                }
            });
        }
    }

    render() {
        let optionList = this.state.inputTime.map((data) => {
            return (
                <option key={data.value} value={data.time}>{data.time}</option>
            )
        })
        return (
            <React.Fragment>
                <div className="timingForm">
                    {this.state.redirect ? <Redirect to={{
                        pathname: '/showDocList'
                    }} /> : ''}
                    <Col className="text-center">
                        <hr /><hr />
                        <h1>New Doctor Timings:</h1>
                        <hr /><hr />
                    </Col>
                    <div style={{ paddingLeft: "250px" }}>
                        <Form onSubmit={this.handleSubmit}>
                            <Row form>
                                <FormGroup>
                                    <h2>Monday</h2>
                                    <Button onClick={(e) => this.addSelectField(e, "monday")}>Add</Button>
                                    <hr />
                                    {this.state.days.monday.map((item, i) => {
                                        return (
                                            <Row key={i}>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="startTime">Start</Label>
                                                        <select style={{ width: '100%' }} name="startTime"
                                                            onChange={(e) => this.handleChange(e, i, "monday")} >
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="endTime">End</Label>
                                                        <select style={{ width: '100%' }} name="endTime"
                                                            onChange={(e) => this.handleChange(e, i, "monday")} >
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Button onClick={(e) => this.deleteSelectField(e, i, "monday")}>Delete</Button>
                                            </Row>
                                        )
                                    })}
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.monday}
                                        </small>
                                    )}
                                </FormGroup>
                            </Row>
                            <Row form>
                                <FormGroup>
                                    <h2>Tuesday</h2>
                                    <Button type="submit" onClick={(e) => this.addSelectField(e, "tuesday")}>Add</Button>
                                    <hr />
                                    {this.state.days.tuesday.map((item, i) => {
                                        return (
                                            <Row key={i}>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="startTime">Start</Label>
                                                        <select style={{ width: '100%' }} name="startTime"
                                                            onChange={(e) => this.handleChange(e, i, "tuesday")} >
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="endTime">End</Label>
                                                        <select style={{ width: '100%' }} name="endTime"
                                                            onChange={(e) => this.handleChange(e, i, "tuesday")} >
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Button type="submit" onClick={(e) => this.deleteSelectField(e, i, "tuesday")}>Delete</Button>
                                            </Row>
                                        )
                                    })}
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.tuesday}
                                        </small>
                                    )}
                                </FormGroup>
                            </Row>
                            <Row form>
                                <FormGroup>
                                    <h2>Wednesday</h2>
                                    <Button type="submit" onClick={(e) => this.addSelectField(e, "wednesday")}>Add</Button>
                                    <hr />
                                    {this.state.days.wednesday.map((item, i) => {
                                        return (
                                            <Row key={i}>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="startTime">Start</Label>
                                                        <select style={{ width: '100%' }} name="startTime"
                                                            onChange={(e) => this.handleChange(e, i, "wednesday")} >
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="endTime">End</Label>
                                                        <select style={{ width: '100%' }} name="endTime"
                                                            onChange={(e) => this.handleChange(e, i, "wednesday")}>
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Button type="submit" onClick={(e) => this.deleteSelectField(e, i, "wednesday")}>Delete</Button>
                                            </Row>
                                        )
                                    })}
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.wednesday}
                                        </small>
                                    )}
                                </FormGroup>
                            </Row>
                            <Row form>
                                <FormGroup>
                                    <h2>Thursday</h2>
                                    <Button type="submit" onClick={(e) => this.addSelectField(e, "thursday")}>Add</Button>
                                    <hr />
                                    {this.state.days.thursday.map((item, i) => {
                                        return (
                                            <Row key={i}>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="startTime">Start</Label>
                                                        <select style={{ width: '100%' }} name="startTime"
                                                            onChange={(e) => this.handleChange(e, i, "thursday")} >
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="endTime">End</Label>
                                                        <select style={{ width: '100%' }} name="endTime"
                                                            onChange={(e) => this.handleChange(e, i, "thursday")} >
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Button type="submit" onClick={(e) => this.deleteSelectField(e, i, "thursday")}>Delete</Button>
                                            </Row>
                                        )
                                    })}
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.thursday}
                                        </small>
                                    )}
                                </FormGroup>
                            </Row>
                            <Row form>
                                <FormGroup>
                                    <h2>Friday</h2>
                                    <Button type="submit" onClick={(e) => this.addSelectField(e, "friday")}>Add</Button>
                                    <hr />
                                    {this.state.days.friday.map((item, i) => {
                                        return (
                                            <Row key={i}>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="startTime">Start</Label>
                                                        <select style={{ width: '100%' }} name="startTime"
                                                            onChange={(e) => this.handleChange(e, i, "friday")} >
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="endTime">End</Label>
                                                        <select style={{ width: '100%' }} name="endTime"
                                                            onChange={(e) => this.handleChange(e, i, "friday")} >
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Button type="submit" onClick={(e) => this.deleteSelectField(e, i, "friday")}>Delete</Button>
                                            </Row>
                                        )
                                    })}
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.friday}
                                        </small>
                                    )}
                                </FormGroup>
                            </Row>
                            <Row form>
                                <FormGroup>
                                    <h2>Saturday</h2>
                                    <Button type="submit" onClick={(e) => this.addSelectField(e, "saturday")}>Add</Button>
                                    <hr />
                                    {this.state.days.saturday.map((item, i) => {
                                        return (
                                            <Row key={i}>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="startTime">Start</Label>
                                                        <select style={{ width: '100%' }} name="startTime"
                                                            onChange={(e) => this.handleChange(e, i, "saturday")} >
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="endTime">End</Label>
                                                        <select style={{ width: '100%' }} name="endTime"
                                                            onChange={(e) => this.handleChange(e, i, "saturday")} >
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Button type="submit" onClick={(e) => this.deleteSelectField(e, i, "saturday")}>Delete</Button>
                                            </Row>
                                        )
                                    })}
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.saturday}
                                        </small>
                                    )}
                                </FormGroup>
                            </Row>
                            <Row form>
                                <FormGroup>
                                    <h2>Sunday</h2>
                                    <Button type="submit" onClick={(e) => this.addSelectField(e, "sunday")}>Add</Button>
                                    <hr /><hr />
                                    {this.state.days.sunday.map((item, i) => {
                                        return (
                                            <Row key={i}>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="startTime">Start</Label>
                                                        <select style={{ width: '100%' }} name="startTime"
                                                            onChange={(e) => this.handleChange(e, i, "sunday")} >
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Col >
                                                    <FormGroup>
                                                        <Label for="endTime">End</Label>
                                                        <select style={{ width: '100%' }} name="endTime"
                                                            onChange={(e) => this.handleChange(e, i, "sunday")} >
                                                            
                                                            {optionList}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Button type="submit" onClick={(e) => this.deleteSelectField(e, i, "sunday")}>Delete</Button>
                                            </Row>
                                        )
                                    })}
                                    {this.state.errors && (
                                        <small style={{ color: "red" }}>
                                            {this.state.errors.sunday}
                                        </small>
                                    )}
                                </FormGroup>
                            </Row>
                            <Button type="submit">SAVE DATA</Button>
                        </Form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("docTiming:",state)
    return {
        formState: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTimeData: (docTime) => dispatch(addTimeData(docTime)),
        addTableData: (data) => dispatch(addTableData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTiming);