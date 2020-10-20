import {
    ADD_FORM,
    ADD_TIME,
    ADD_TABLE
} from '../redux/actionTypes';

const initialData = {
    user: {
        name: "",
        experience: "",
        fees: "",
        qualification: "",
        practising: "",
        language: [],
        email: "",
        phone: "",
        medicalNo: "",
        graduation: "",
        specialization: "",
        superSpecialization: "",
        gender: "",
        speciality: "",
        availability: {
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
            Sunday: []
        }
    },
    DocList: []
}

export const formDataReducer = (
    state = initialData,
    action
) => {
    let doctorState = { ...state };
    switch (action.type) {
        case ADD_FORM: {
            doctorState.user = {
                name: action.payload.doctorForm.name,
                experience: action.payload.doctorForm.experience,
                fees: action.payload.doctorForm.fees,
                qualification: action.payload.doctorForm.qualification,
                practising: action.payload.doctorForm.practising,
                language: action.payload.doctorForm.language,
                email: action.payload.doctorForm.email,
                phone: action.payload.doctorForm.phone,
                medicalNo: action.payload.doctorForm.medicalNo,
                graduation: action.payload.doctorForm.graduation,
                specialization: action.payload.doctorForm.specialization,
                superSpecialization: action.payload.doctorForm.superSpecialization,
                gender: action.payload.doctorForm.gender,
                speciality: action.payload.doctorForm.speciality,
                availability: doctorState.user.availability
            }
            break;
        }
        case ADD_TIME: {
            doctorState.user.availability = {
                Monday: action.payload.timingForm.monday,
                Tuesday: action.payload.timingForm.tuesday,
                Wednesday: action.payload.timingForm.wednesday,
                Thursday: action.payload.timingForm.thursday,
                Friday: action.payload.timingForm.friday,
                Saturday: action.payload.timingForm.saturday,
                Sunday: action.payload.timingForm.sunday
            }
            break;
        }
        case ADD_TABLE: {
            doctorState.DocList.push(action.payload.data)
            doctorState.user = {
                name: "",
                experience: "",
                fees: "",
                qualification: "",
                practising: "",
                language: [],
                email: "",
                phone: "",
                medicalNo: "",
                graduation: "",
                specialization: "",
                superSpecialization: "",
                gender: "",
                speciality: "",
                availability: {
                    Monday: [],
                    Tuesday: [],
                    Wednesday: [],
                    Thursday: [],
                    Friday: [],
                    Saturday: [],
                    Sunday: []
                }
            }
            break;
        }
        default: { }
    }
    return doctorState;
}