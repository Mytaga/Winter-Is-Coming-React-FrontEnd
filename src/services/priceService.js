const baseUrl = 'https://localhost:5001/api/Price'

export const addPrice = async(priceData, token) => {
    const response = await fetch(`${baseUrl}/add`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(priceData)
    });

    const result = await response.json();

    return result;
}