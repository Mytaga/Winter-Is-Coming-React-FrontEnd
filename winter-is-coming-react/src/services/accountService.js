const baseUrl = 'https://localhost:5001/api/Account';

export const login = async(userData) =>{
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'cookie': '.AspNetCore.Identity.Application=CfDJ8M88vuqPYBFIp402y3OagmZwK5wluBjqxzPqTWcwwfBaQYAAErIXuoDFNjiCmQlk4rYQnhKQbVuI5AITBlNNRS_TzYI_sJIC29iPXKs9xXxDjDuM1ilHJB2A2jwEvAPmbsQ0Mo_BkrBNoFwzrnVGUSwOVex6Frvot5B9-0uCB0HvFWClxNoCnBJwAYpbGWD1E7quSs-6BGUbs3J11QV8J-JY-pZWOBqx_OI-_9sb1VQEsIBFmeqE6aRAwyxTPc0ug_BwwzoiavUpS7x0HNL7a13p9uox3CzwbT-dy1xPkdWoHhrPLOOf2N9fqkHjm9eNzdA7ihewI9YDuz0Wrf86ZYWEXkc3jlLaFXv_FIg7-1zxQpv1HOon86zk1DSJy8DXI-y738ibEFDqV1qyFqpOe45Drd_K4e0h2Hg3onBrE_aj6EbPS32Xh898CcfSRHHLCacnZruHYZA3sqwsYQ7HK57oQ7RikhXH0CHt6kONAN7yONr2mwJRRYnveDeDHKA5I2oLiXCWcXcURqNYw-BAxKrzBcs2j71-alTUpPQ9PnQcm9RRG00j_DWSdoxuu0sAkfWxOpXatj3y-DEY5RFmCNErPHi27p_WYSLtXBkggV4E9CsanjUTmy0CrjubzHyezI_eOYSt4gFDoOR_lF-3jpNOVZWBqk2Vn-ZFVnTSzxwv203TFk5MGfHBlbFYBae_SbD2fUXutt2bXv40q6QDhS8',
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();

    return result;
};

export const register = async(userData) =>{
    await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
};

export const logout = async(token) => {
    await fetch(`${baseUrl}/logout`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${token}`,
            'content-type': 'application/json',
        },
    });
};