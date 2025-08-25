const request = require("request");

const url = "https://api.weatherstack.com/current?access_key=0be37d0c1fac3196b3c920f7728c495b&query=37.8267,-122.4233&units=f";


//first arg is an options object, outlines what we'd like to do. second arg is a func, runs once response received
request({ url: url, json: true }, (error, response) => {
    // const data = JSON.parse(response.body);
    // console.log(data.current); //data.current used for weatherstack API - data.currently for darksky API which we don't use anymore
    // console.log(response.body.current);
    console.log(response.body.current.weather_descriptions[0] + ": It is currently " + response.body.current.temperature + " degrees out. " + "There is " + response.body.current.precip + "% chance of rain.");
})


// GEOCODING




// // ASYNCHRONOUS BASICS
// console.log("Starting");

// setTimeout(() => { // takes in two arguments, both are required. function and number(ms).
//     console.log("2 second timer");
// }, 2000)


// setTimeout(() => {
//     console.log("0 second timer");
// }, 0)

// console.log("Stopping");