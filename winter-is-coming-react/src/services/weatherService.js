const apiKey = 'p4nYBybvF2p9eGaGilTlHf4W2T1kXz7Y';
const baseUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/1day`;

export const weatherInfo = {
    Bansko : '43095',
    Borovets : '51072',
}

export const getDaily = async(city) => {
    const response = await fetch(`${baseUrl}/${city}?apikey=${apiKey}`);

    const result = await response.json();

    return result.DailyForecasts[0];
}