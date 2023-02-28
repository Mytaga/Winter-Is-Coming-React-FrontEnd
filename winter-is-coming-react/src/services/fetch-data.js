const host = 'https://localhost:5001/api/Resort/GetAll';

async function getAllResorts() {

    const response = await fetch(host);

    if (response.ok !== true) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const resorts = response.json();
    return resorts;
};

export default getAllResorts;