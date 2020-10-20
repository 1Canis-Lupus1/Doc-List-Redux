import React from 'react';
import { Row, Col, Table } from 'reactstrap';

export const DocDisplay = ({doc}) => {

    //Fetch Data From Redux-Store and Display Here
    return(
        <tr>
            <td>{doc.name}</td>
            <td>{doc.email}</td>
            <td>{doc.phone}</td>
            <td>{doc.location}</td>
            <td>{doc.speciality}</td>
            <td>{doc.fees}</td>
            <td>{doc.experience}</td>
            <td>Active</td>
        </tr>
    )
}
