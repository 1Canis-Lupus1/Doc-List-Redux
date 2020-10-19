import {ADD_FORM,ADD_TIME} from './actionTypes';

const initialDataState={
    docData:{}
}

export const displayData=(state=initialDataState,action)=>{
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
        default:{
            return state
        }
    }
}

const initialTimeState={
    docTime:{}
}

export const displayTime=(state=initialTimeState,action)=>{
    switch(action.type){
        case ADD_TIME:{
            return(
                {
                    ...state,
                    docTime:{
                        ...state.docTime
                    }
                }
            )
        }
    }
}