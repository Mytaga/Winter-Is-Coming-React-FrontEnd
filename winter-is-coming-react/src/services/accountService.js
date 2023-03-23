const baseUrl = 'https://localhost:5001/api/Account';

export const login = async(userData) =>{
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();

    return result;
};

export const register = async(userData) =>{
    await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
};

export const logout = async() => {
    await fetch(`${baseUrl}/logout`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
    });
};