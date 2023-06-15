const baseUrl = 'https://localhost:5001/api/comments';

export const getResortComments = async (resortId) => {
    const response = await fetch(`${baseUrl}/all/${resortId}`);

    const result = await response.json();

    return result.comments;
};

export const addComment = async (commentData, resortId, token) => {
    const response = await fetch(`${baseUrl}/${resortId}`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`,
            'content-type': 'application/json',
        },
        body: JSON.stringify(commentData),
    });

    const result = await response.json();

    return result;
};

export const deleteComment = async (resortId, userId, token) => {
    const response = await fetch(`${baseUrl}/${resortId}/${userId}`, {
        method: 'DELETE',
        headers: {
            'authorization': `Bearer ${token}`,
            'content-type': 'application/json',
        }
    });

    const result = await response.json();

    return result;
};