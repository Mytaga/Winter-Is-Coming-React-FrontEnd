const baseUrl = 'https://localhost:5001/api/Resort'

export const getResorts = async () => {

    const response = await fetch(`${baseUrl}/GetAll`);

    const result = await response.json();

    return result.resorts;

    // return fetch(`${baseUrl}/GetAll`)
    //     .then(res => res.json())
    //     .then(data => data.resorts)
    //     .catch(error => console.error(error))
};

export const getFilteredResorts = async (searchQuery, country) => {

    const response = await fetch(`${baseUrl}/GetAll?country=${country}&searchQuery=${searchQuery}`);

    const result = await response.json();

    return result.resorts;

    // return fetch(`${baseUrl}/GetAll`)
    //     .then(res => res.json())
    //     .then(data => data.resorts)
    //     .catch(error => console.error(error))
};

export const getCountries = async () => {

    const response = await fetch(`${baseUrl}/LoadCountries`);

    const result = await response.json();

    return result;

    // return fetch(`${baseUrl}/LoadCountries`)
    // .then(res => res.json())
    // .then(data => data)
    // .catch(error => console.error(error))
}
