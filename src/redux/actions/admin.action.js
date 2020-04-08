import { FETCH_DOCTORS } from "redux/actiontypes/actiontypes";


export function fetchDoctors(doctorList) {
    return dispatch => {
        dispatch(asyncFetchDoctors(doctorList))
    }
}

export const asyncFetchDoctors = (doctorList) => ({
    type: FETCH_DOCTORS,
    doctorsList : doctorList
})