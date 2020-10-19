import React, { Component } from 'react';
import { docData } from '../http/http-calls';
import { Row, Col, Table } from 'reactstrap';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: []
        }
    }

    componentDidMount() {
        docData().then(response => {
            // console.log("Response:", response);
            this.setState({
                details: response.doctors
            })
            console.log("Doctor Details:", this.state.details);
        })
            .catch(err => {
                console.log("Error:", err);
            })

    }
    render() {
        return (
            <React.Fragment>
                <h1>Doctor Details</h1>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Location</th>
                                    <th>Speciality</th>
                                    <th>Consult Fees</th>
                                    <th>Consults</th>
                                    <th>Schedule</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.details.map((item) => {
                                        return(
                                            <tr key={item.id}>
                                        <th>{item.name?.full}</th>
                                        <th>{item.email}</th>
                                        <th>{item.phone}</th>
                                        <th>{item.location?.city}    </th>
                                        <th>{item.speciality}</th>
                                        <th>{item.fee}</th>
                                        <th>{item.totalAppointment}</th>
                                        <th>{item.registrationNumber}</th>
                                        <th>{item.isActive?"Active":"In-Active"}</th>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                {/* <ol>
                    {this.state.details.map((item) => {
                        return <li>{item.name?.full}</li>
                    })}

                </ol> */}
            </React.Fragment>
        )
    }
}

export default Details;