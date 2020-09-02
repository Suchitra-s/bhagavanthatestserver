let express = require("express");
// require is standard node function to load any library
// The express library when loaded it returns a function object
// The function object can be used to call the function

var cors = require("cors");
var bodyParser = require("body-parser");

let webserver = express(); // calling the function to create a web server instance

webserver.listen(8080); // This opens listening socket for browsers to connect

// Middleware: All request and response will go through this
// Before request is process by get it will go through cors
// Before response is sent back to the browser it will go through cors
webserver.use(cors());
webserver.use(bodyParser.json()); // this is deserializer

// Client-Side Scripts
// making the dist folder as public, means browser can send request to obtain files
// from the dist folder
//webserver.use ( express.static("dist") ) ;


let categories = 
[
    { categoryId : 1, categoryName : "ಗಣೇಶ ಸ್ತುತಿ"},
    { categoryId : 2, categoryName : "ಶ್ರೀ ಶಾರದಾ ಸ್ತುತಿ"},
    { categoryId : 3, categoryName : "ಶ್ರೀ ಲಕ್ಷ್ಮೀದೇವಿ"},
    { category : 4, categoryName : "ಶ್ರೀ ಕೃಷ್ಣ"}
];

let songs =
[
    {songId : 101, categoryId : 1, songName : "ವಂದಿಪೆ ನಿನಗೆ ಗಣನಾಥಾ"},
    {songId : 102, categoryId : 1, songName : "ಅಂಬಾತನಯ"},
    {songId : 103, categoryId : 1, songName : "ಶರಣು ಸಿದ್ಧಿವಿನಾಯಕ"},
    {songId : 105, categoryId : 2, songName : "ನಮ್ಮಮ್ಮ ಶಾರದೆ ಉಮಾಮಹೇಶ್ವರಿ"},
    {songId : 106, categoryId : 2, songName : "ಪಾರ್ವತಿ ಪಾಲಿಸೆನ್ನ"},
    {songId : 107, categoryId : 2, songName : "ಉಮಾ ಕಾತ್ಯಾಯನಿ"},
    {songId : 108, categoryId : 2, songName : "ಪಂಪಾಪುರದ ಲಿಂಗ"},
    {songId : 101, categoryId : 3, songName : "ವಂದಿಪೆ ನಿನಗೆ ಗಣನಾಥಾ"},
    {songId : 102, categoryId : 3, songName : "ಅಂಬಾತನಯ"},
    {songId : 103, categoryId : 3, songName : "ಶರಣು ಸಿದ್ಧಿವಿನಾಯಕ"},
    {songId : 105, categoryId : 4, songName : "ನಮ್ಮಮ್ಮ ಶಾರದೆ ಉಮಾಮಹೇಶ್ವರಿ"},
    {songId : 106, categoryId : 4, songName : "ಪಾರ್ವತಿ ಪಾಲಿಸೆನ್ನ"},
    {songId : 107, categoryId : 4, songName : "ಉಮಾ ಕಾತ್ಯಾಯನಿ"},
    {songId : 108, categoryId : 4, songName : "ಪಂಪಾಪುರದ ಲಿಂಗ"},
];

// Server-Side Scripts
// Handle HTTP requests that browser will send
// URL: http://localhost:3000/books
webserver.get("/categories", (request, response) => {
    setTimeout(() => {
        response.json(categories); // sending string to browser (array of char) - char - 2 bytes
        // JSON Serialization: Converting in-memory objects to a string (javascript object notation)
    }, 5000);
});


webserver.get("/songs", (request, response) => {
    setTimeout(() => {
        response.json(songs); // sending string to browser (array of char) - char - 2 bytes
        // JSON Serialization: Converting in-memory objects to a string (javascript object notation)
    }, 5000);
});

// JSON Deserialization: Converting json string to JS objects or .NET object or Python objects

// webserver.post("/books", (request, response) => {
//     console.log(request.body);
// });

