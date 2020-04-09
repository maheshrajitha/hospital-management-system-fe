import { FETCH_DOCTORS } from "redux/actiontypes/actiontypes"

const initialState = {
    doctors : []
}
export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DOCTORS:
            state.doctors = action.doctorsList;
            return {...state}
        default:
            return state
    }
}