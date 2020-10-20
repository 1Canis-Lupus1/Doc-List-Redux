import React from 'react';
import { Redirect } from 'react-router-dom';

export const AddNewDoc = () => {
    return (
        <Redirect to={{
            pathname: '/addDocForm'
        }} />
    )
}

export default AddNewDoc;