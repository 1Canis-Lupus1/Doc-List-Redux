import { 
    ADD_FORM,
    ADD_TIME,
    ADD_TABLE
} from './actionTypes';

export const addFormData = docData => {
    return {
        type: ADD_FORM,
        payload: docData
    }
}

export const addTimeData = docTime => {
    return {
        type: ADD_TIME,
        payload: docTime
    }
}

export const addTableData = docTable => {
    return {
        type: ADD_TABLE,
        payload: docTable
    }
}

