const getResortsUrl = 'https://localhost:5001/api/Resort/GetAll';
const getCountriesUrl = 'https://localhost:5001/api/Resort/LoadCountries';

export const getResorts = () => {
    return fetch(getResortsUrl)
        .then(res => res.json())
        .then(data => data.resorts)
        .catch(error => console.error(error))
};

export const getCountries = () => {
    return fetch(getCountriesUrl)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.error(error))
}


