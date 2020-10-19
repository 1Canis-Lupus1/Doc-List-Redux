import {ADD_FORM,ADD_TIME} from './actionTypes';

const initialState={
    docData:{},
    docTime:{}
}

export const displayData=(state=initialState,action)=>{
    switch(action.type){
        case ADD_FORM:{
            return (
                {
                    ...state,
                    docData:{
                        ...state.docData
                    }
                }
            )
        }
        case ADD_TIME:{
            return (
                {
                    ...state,
                    docTime:{
                        ...state.docTime
                    }
                }
            )
        }
        default:{
            return state
        }
    }
}