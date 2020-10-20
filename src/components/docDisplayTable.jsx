import React from 'react';
import {useSelector} from 'react-redux';
import {Table} from 'reactstrap';
import {DocDisplay} from './docDisplay';

const DocDisplayTable=()=>{

    const stateData=useSelector(state=>state);

    return(
        <React.Fragment>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Practising At</th>
                        <th>Speciality</th>
                        <th>Consult Fees</th>
                        <th>Experience</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {stateData.DocList.map(doctor=>{
                    <DocDisplay doc={doctor} key={doctor.phone} />
                    })} */}
                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default DocDisplayTable;