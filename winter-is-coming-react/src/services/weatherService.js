const apiKey = '3KDGMTSWXF4AHL8AGNG8YRJMG'
const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export const getDaily = async (city) => {
    const response = await fetch(`${baseUrl}${city}?unitGroup=metric&key=${apiKey}&contentType=json`);

    const result = await response.json();

    return result.currentConditions;
};

