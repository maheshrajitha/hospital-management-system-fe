import { BASE_URL } from "variables/values";

export async function getAllDoctors() {
    return fetch(`${BASE_URL}admin/all-doctors/1`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return response.json()
        } else
            throw new Error('Some Thing Went Wrong');
    }).catch(e => console.log(e));
}