const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
    console.log("Please provide address.");
} else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log(error);
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }

            console.log(location);
            console.log(forecastData);
        })
    });
}

console.log(process.argv);




// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


// const url = "https://api.weatherstack.com/current?access_key=0be37d0c1fac3196b3c920f7728c495b&query=37.8267,-122.4233&units=f";


// //first arg is an options object, outlines what we'd like to do. second arg is a func, runs once response received
// request({ url: url, json: true }, (error, response) => {
//     // const data = JSON.parse(response.body);
//     // console.log(data.current); //data.current used for weatherstack API - data.currently for darksky API which we don't use anymore
//     // console.log(response.body.current);

//     if (error) {
//         console.log("Unable to connect.");
//     } else if (response.body.error) {
//         console.log("Unable to find location.");
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ": It is currently " + response.body.current.temperature + " degrees out. " + "There is " + response.body.current.precip + "% chance of rain.");
//     }
// })


// GEOCODING

// const geocodeURL = "https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Angeles&access_token=pk.eyJ1IjoiamxlMTciLCJhIjoiY21lcmNtd3JwMDVtbTJqcTB5NTVuYjdoMSJ9.oeLdLdniFxB-L8mz06wHIA&limit=1";

// request({ url: geocodeURL, json: true }, (error, response) => {
//     // const latitude = response.body.features[0].center[0];
//     // const longitude = response.body.features[0].center[1];

//     if (error) {
//         console.log("Unable to connect.");
//     } else if (response.body.features.length === 0) {
//         console.log("Search again.");
//     } else {
//         const feature = response.body.features[0]; //might as well assign it to a variable to make code concise below

//         //mapbox is now using geometry.coordinates inside each feature for lat/lon
//         const longitude = feature.geometry.coordinates[0]; //in URL, center was not present consisting of the lat/lon, it was in coordinates
//         const latitude = feature.geometry.coordinates[1];

//         console.log(latitude, longitude);
//     }
// })


// // ASYNCHRONOUS BASICS
// console.log("Starting");

// setTimeout(() => { // takes in two arguments, both are required. function and number(ms).
//     console.log("2 second timer");
// }, 2000)


// setTimeout(() => {
//     console.log("0 second timer");
// }, 0)

// console.log("Stopping");