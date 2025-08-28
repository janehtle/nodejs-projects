const https = require("https");
const url = "https://api.weatherstack.com/current?access_key=0be37d0c1fac3196b3c920f7728c495b&query=32.754088,-111.671119&units=f";

const request = https.request(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
        data = data + chunk.toString();
    })

    response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on("error", (error) => {
    console.log("Error", error);
})

request.end();