const baseUrl = 'https://localhost:5001/api/Comment'

export const getResortComments = async(resortId) => {
    const response = await fetch(`${baseUrl}/getResortComments/${resortId}`);

    const result = await response.json();

    return result.resorts;
};

export const addComment = async(resortId, commentData) => {
    const response = await fetch(`${baseUrl}/add/${resortId}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(commentData)
    });

    const result = await response.json();

    return result;
};