const baseUrl = 'https://localhost:5001/api/Like';

export const likeResort = async (resortId, userId, token) => {
    const response = await fetch(`${baseUrl}/like/${resortId}/${userId}`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`,
        },
    });

    const result = response.json();

    return result;
}

export const getResortLikes = async(resortId) => {
    
    const response = await fetch(`${baseUrl}/getResortLikes/${resortId}`)

    const result = response.json();

    return result;
};