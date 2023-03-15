const baseUrl = 'https://localhost:5001/api/Resort'

export const getResorts = async () => {

    const response = await fetch(`${baseUrl}/getAll`);

    const result = await response.json();

    return result.resorts;

    // return fetch(`${baseUrl}/GetAll`)
    //     .then(res => res.json())
    //     .then(data => data.resorts)
    //     .catch(error => console.error(error))
};

export const getFilteredResorts = async (searchQuery, country) => {

    const response = await fetch(`${baseUrl}/getAll?country=${country}&searchQuery=${searchQuery}`);

    const result = await response.json();

    return result.resorts;
};

export const getCountries = async () => {

    const response = await fetch(`${baseUrl}/loadCountries`);

    const result = await response.json();

    return result;
}

export const getResortDetails = async (id) =>{
    
    const response = await fetch(`${baseUrl}/details/${id}`);

    const result = await response.json();

    return result;
}

export const addResort = async(resortData) => {
    const response = await fetch(`${baseUrl}/add`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(resortData)
    });

    const result = await response.json();

    return result;
}

export const getResortNames = async() => {
    const response = await fetch(`${baseUrl}/getResortNames`);

    const result = await response.json();

    return result;
}