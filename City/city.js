const axios = require('axios');

const getCityCoordenates = async(city) => {
    const encodedURL = encodeURI(city); //To handle special characters like blank spaces in city names (i.e New York)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            "x-rapidapi-key": "cfbcca7a8emsh923b6c0096cb514p1cae03jsnacd8ebe19993",
            "useQueryString": true
        }
    });

    const resp = await instance.get()

    if (resp.data.Results === null) {
        throw new Error(`Results are null`);
        return;
    }
    if (resp.data.Results.length === 0) {
        throw new Error(`There are no results for ${city}`);
        return;
    }

    const data = resp.data.Results[0];
    const location = data.name;
    const lat = data.lat;
    const lng = data.long;

    return {
        location,
        lat,
        lng
    }
}

module.exports = {
    getCityCoordenates
}