import { FETCH_DOCTORS, FETCH_PATIENTS , FETCH_PHARMACISTS } from "../actiontypes/actiontypes";

const initialState = {
    doctors: [],
    pages: 0,
    patientList: [],
    patientPages: 0,
    pharmacistList: [],
    pharmacistsPages : 0
}
export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DOCTORS:
            state.doctors = action.doctorsList.doctorList;
            state.pages = action.doctorsList.pages;
            return { ...state }
        case FETCH_PATIENTS:
            state.patientList = action.patientResponse.patients;
            state.patientPages = action.patientResponse.pages;
            return { ...state }
        case FETCH_PHARMACISTS:
            state.pharmacistList = action.pharmacistsResponse.pharmacists;
            state.pharmacistsPages = action.pharmacistsResponse.pages;
            return {...state}
        default:
            return state
    }
}