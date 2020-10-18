import React from 'react';
import { Row, Col, Table } from 'reactstrap';

const DocDisplay = () => {

    //Fetch Data From Redux-Store and Display Here

    return (
        <div className="mt-4">
            <h1>Doctor Table :</h1>
            <Row>
                <Col>
                    {/* Creating the Doctor's Table */}
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Speciality</th>
                                <th>Experience</th>
                                <th>Fees</th>
                                <th>Qualifications</th>
                                <th>Location</th>
                                <th>Languages</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Gender</th>
                                <th>Registration Number</th>
                                <th>Specialization</th>
                                <th>Super-Specialization</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>ABC</th>
                                <th>ABC</th>
                                <th>ABC</th>
                                <th>ABC</th>
                                <th>ABC</th>
                                <th>ABC</th>
                                <th>ABC</th>
                                <th>ABC</th>
                                <th>ABC</th>
                                <th>ABC</th>
                                <th>ABC</th>
                                <th>ABC</th>
                                <th>ABC</th>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>

    )
}

export default DocDisplay;