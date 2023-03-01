const apiUrl = 'https://localhost:5001/api/Resort/GetAll';

const getData = () => {
    return fetch(apiUrl)
        .then(res => res.json())
        .then(data => data.resorts)
        .catch(error => console.error(error))
};

export default getData;