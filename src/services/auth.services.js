import { BASE_URL } from '../variables/values';
export async function login(email, password) {
    return fetch(`${BASE_URL}auth/login`, {
        method: 'POST',
        body: JSON.stringify({
            password: password,
            email : email
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return response;
        } else {
            if (response.status === 401)
                throw new Error('Wron Email Or Password');
            
        }
    }).catch(e=> console.log(e));
}