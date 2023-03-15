const baseUrl = 'https://localhost:5001/api/Price'

export const addPrice = async(priceData) => {
    const response = await fetch(`${baseUrl}/add`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(priceData)
    });

    const result = await response.json();

    return result;
}