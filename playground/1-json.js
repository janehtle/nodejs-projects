const fs = require("fs");
// const book = {
//     title: "All The Love You Carry",
//     author: "Charis Ed"
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// const dataBuff = fs.readFileSync("1-json.json"); //read file in our binary data
// const dataJSON = dataBuff.toString(); //converted it to a str in JS
// const data = JSON.parse(dataJSON); //parsed the JSON data to an object
// console.log(data.title); //access the property from it

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);
console.log(user.name);
console.log(user.age);

//assign new values to name and age property
user.name = "Jane"; 
user.age = 26;

const userJSON = JSON.stringify(user); //converts it to a JSON string from JS 
fs.writeFileSync("1-json.json", userJSON); //override the data in the file path to the new values

