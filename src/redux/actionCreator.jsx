import {bindActionCreators} from 'redux';

const updateName= name =>({type: "FULL_NAME",payload: name});

const updateEmail= email=>({type:"EMAIL",payload:email});

const updatePhone= number=>({type:"PHONE_NUMBER",payload: number});

const updateLocation= location=>({type:"LOCATION",payload:location});

const updateSpeciality= speciality=>({type: "SPECIALITY",payload: speciality});

const updateFees= fee =>({type:"CONSULT_FEES",payload:fee});

const updateConsults= num =>({type:"CONSULT_NUMBER",payload:num});

const updateGender=gender=>({type:"GENDER",payload:gender});

// const updateQualification= qualification =>({type:"QUALIFICATION",payload: qualification});

// const updateLanguages= lang=>({type:"LANGUAGE",payload:lang});
 export const actionCreators=bindActionCreators(
     {
         updateName,
         updateEmail,
         updatePhone,
         updateLocation,
         updateSpeciality,
         updateFees,
         updateConsults,
         updateGender
     },
    //  store.dispatch
 );