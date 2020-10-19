import {ADD_FORM,ADD_TIME} from './actionTypes';

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