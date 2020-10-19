const initialState={
    docData:[]
};

const docFormData=(state=initialState,action)=>{
    switch(action.type){
        case "":
            return {
                ...state,
                docData:[...state.docData,action.payload]
            };
        default:
            return state;
    }
};

export default docFormData;