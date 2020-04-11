import { FETCH_DOCTORS , FETCH_PATIENTS } from "redux/actiontypes/actiontypes";


export function fetchDoctors(doctorList) {
    return dispatch => {
        dispatch(asyncFetchDoctors(doctorList))
    }
}

export const asyncFetchDoctors = (doctorList) => ({
    type: FETCH_DOCTORS,
    doctorsList: doctorList
});

export function fetchPatients(response) {
    return dispatch => {
        dispatch(asyncFetchPatients(response))
    }
}

export const asyncFetchPatients = (response) => ({
    type: FETCH_PATIENTS,
    patientResponse  : response
})