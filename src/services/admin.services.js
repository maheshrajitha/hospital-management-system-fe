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

export async function addDoctor(fullName, email, address, specialities , gender , regNumber , telNumber) {
    return fetch(`${BASE_URL}admin/add-new-doctor`, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            role: 2,
            fullName: fullName,
            telNumber: telNumber,
            gender: gender,
            specialities: specialities,
            regNumber: regNumber,
            address: address
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
    }).then(response => {
        if (response.ok)
            response.json();
        else
            throw new Error('Unauthorized');
    }).catch(err => { throw err });
}