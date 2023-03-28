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

export const logout = async(token) => {
    await fetch(`${baseUrl}/logout`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`,
        },
    });
};

export const getProfile = async(userId, token) => {
    const response = await fetch(`${baseUrl}/viewProfile/${userId}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
        },
    });

    const result = response.json();

    return result;
}