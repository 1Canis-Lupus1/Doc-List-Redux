import {ADD_DOC} from './actionTypes';

export const addDoc=(content)=>{
    {
        type: ADD_DOC,
        payload: {
            content
        }
    }
}