const host = 'https://localhost:5001/api/Resort/GetAll';

async function getAllResorts() {
    fetch(host)
    .then(res => res.json())
    .catch(error => console.log(error))
};

export default getAllResorts;