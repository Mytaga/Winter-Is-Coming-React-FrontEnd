const baseUrl = 'https://localhost:5001/api/resorts'

export const getResorts = async () => {

    const response = await fetch(`${baseUrl}`);

    const result = await response.json();

    return result.resorts;
};

export const getFilteredResorts = async (searchQuery, country) => {

    const response = await fetch(`${baseUrl}/?country=${country}&searchQuery=${searchQuery}`);

    const result = await response.json();

    return result.resorts;
};

export const getCountries = async () => {

    const response = await fetch(`${baseUrl}/countries`);

    const result = await response.json();

    return result;
};

export const getResortDetails = async (id) => {

    const response = await fetch(`${baseUrl}/${id}`);

    const result = await response.json();

    return result;
};

export const addResort = async (resortData, token) => {
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(resortData)
    });

    const result = await response.json();

    return result;
};

export const deleteResort = async (resortId, token) => {
    const response = await fetch(`${baseUrl}/${resortId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });

    const result = await response.json();

    return result;
};

export const getResortNames = async () => {
    const response = await fetch(`${baseUrl}/names`);

    const result = await response.json();

    return result;
};

export const getMyResorts = async (userId, token) => {

    const response = await fetch(`${baseUrl}/mine/${userId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    const result = await response.json();

    return result.resorts;
};

export const getTopResorts = async () => {

    const response = await fetch(`${baseUrl}/top`);

    const result = await response.json();

    return result.resorts;
};