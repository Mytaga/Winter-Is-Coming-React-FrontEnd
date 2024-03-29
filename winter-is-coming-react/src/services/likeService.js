const baseUrl = 'https://localhost:5001/api/like';

export const likeResort = async (resortId, userId, token) => {
    const response = await fetch(`${baseUrl}/${resortId}/${userId}`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`,
        },
    });

    const result = response.json();

    return result;
}

export const unlikeResort = async (resortId, userId, token) => {
    const response = await fetch(`${baseUrl}/${resortId}/${userId}`, {
        method: 'DELETE',
        headers: {
            'authorization': `Bearer ${token}`,
        },
    });

    const result = response.json();

    return result;
}


export const getResortLikes = async(resortId) => {
    
    const response = await fetch(`${baseUrl}/${resortId}`)

    const result = response.json();

    return result;
};