const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.weatherstack.com/current?access_key=0be37d0c1fac3196b3c920f7728c495b&query=" + latitude + "," + longitude + "&units=f"
    // "https://api.mapbox.com/search/geocode/v6/forward?q=" + encodeURIComponent(address) + "&access_token=pk.eyJ1IjoiamxlMTciLCJhIjoiY21lcmNtd3JwMDVtbTJqcTB5NTVuYjdoMSJ9.oeLdLdniFxB-L8mz06wHIA&limit=1";

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect.", undefined)
        } else if (body.error) {
            callback("Unable to search.", undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ": It is currently " + body.current.temperature + " degrees out. " + "There is " + body.current.precip + "% chance of rain.")
        }
    })
}

module.exports = forecast;