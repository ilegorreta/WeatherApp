const city = require('./City/city.js');
const weather = require('./Weather/weather.js');




const argv = require('yargs').options({ //We use this when we dont want extra parameters when invoking the script
    city: {
        alias: 'c',
        desc: 'City to be requested for weather information',
        demand: true
    }
}).argv;

//city.getCityCoordenates(argv.city)
//    .then(console.log);

weather.getWeather(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log);

// const getInfo = async(city) => {

//     try {
//         const coords = await city.getCityCoordenates(city);
//         const temp = await weather.getWeather(coords.lat, coords.lng);
//         return `The temperature of ${city} is ${temp} °C`;
//     } catch (e) {
//         return `We couldn't get the temperature of ${city}`
//     }
// }

// getInfo(argv.city)
//     .then(console.log)
//     .catch(console.log);