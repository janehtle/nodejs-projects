const path = require("path");
const express = require("express"); //express is a func
const hbs = require("hbs");

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
    res.send({
        forecast: "It is sunny",
        location: "Greensboro"
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