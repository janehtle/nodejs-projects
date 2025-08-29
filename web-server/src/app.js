const path = require("path");
const express = require("express"); //express is a func
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express(); //express func doesn't take any args
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../template/views")
const partialsPath = path.join(__dirname, "../template/partials");

app.use(express.static(publicDirPath)) //way to customize server
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);


app.get("", (req, res) => {
    res.render("index", {
        title: "weather app",
        name: "Jane"
    });
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About me",
        name: "Jane"
    });
})

app.get("/help", (req, res) => {
    res.render("help", {
        helpText: "Helpful text",
        title: "Help me",
        name: "Jane"
    });
})

//req = request
//res = response
// app.get("", (req, res) => {
//     res.send("<h1>Weather</h1>");
// })

// app.get("/help", (req, res) => {
//     res.send([{
//         name: "Nia"
//     }, {
//         name: "Jane"
//     }]);
// })

// app.get("/about", (req, res) => {
//     res.send("<h1>About</h1>");
// })

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "Please provide valid address."
        });
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({error});
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({error});
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            });
        })
    })
})

app.get("/products", (req, res) => { //products?key=value
    if (!req.query.search) {
        res.send({
            error: "Please provide valid search."
        })
    }

    console.log(req.query.search); //returns what we are searching
    res.send({
        products: []
    });
})

app.get("/help/*", (req, res) => {
    res.render("Help not found", {
        title: "404",
        name: "Jane",
        errorMessage: "Help not found"
    });
})

app.get("*", (req, res) => { //needs to come last for 404 pages
    res.render("404", {
        title: "404",
        name: "Jane",
        errorMessage: "404 Page Not Found!"
    });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
})