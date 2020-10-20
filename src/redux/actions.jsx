import {ADD_FORM,ADD_TIME,ADD_TABLE} from './actionTypes';

export const addFormData=(content)=>({
    type: ADD_FORM,
    payload:{
        content
    }
})

export const addTimeData=(content)=>({
    type: ADD_TIME,
    payload:{
        content
    }
})

export const addTableData=(content)=>({
    type: ADD_TABLE,
    payload:{
        content
    }
})