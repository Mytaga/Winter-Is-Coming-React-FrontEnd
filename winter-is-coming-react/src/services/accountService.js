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

export const register = async(data) =>{
    
};

export const logout = async() => {

};