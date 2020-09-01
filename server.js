let express = require("express");
// require is standard node function to load any library
// The express library when loaded it returns a function object
// The function object can be used to call the function

var cors = require("cors");
var bodyParser = require("body-parser");

let webserver = express(); // calling the function to create a web server instance

webserver.listen(3000); // This opens listening socket for browsers to connect

// Middleware: All request and response will go through this
// Before request is process by get it will go through cors
// Before response is sent back to the browser it will go through cors
webserver.use(cors());
webserver.use(bodyParser.json()); // this is deserializer

// Client-Side Scripts
// making the dist folder as public, means browser can send request to obtain files
// from the dist folder
//webserver.use ( express.static("dist") ) ;


let books = [
    { title: "T1", author: "A1", price: 1000 },
    { title: "T2", author: "A2", price: 2000 }
];

// Server-Side Scripts
// Handle HTTP requests that browser will send
// URL: http://localhost:3000/books
webserver.get("/books", (request, response) => {
    setTimeout(() => {
        response.json(books); // sending string to browser (array of char) - char - 2 bytes
        // JSON Serialization: Converting in-memory objects to a string (javascript object notation)
    }, 5000);
});

// JSON Deserialization: Converting json string to JS objects or .NET object or Python objects

webserver.post("/books", (request, response) => {
    console.log(request.body);
});

// amazon.in
let products = [

    { name: "Pepsi", price: 40, image: "pepsi.png" },

    { name: "Coke", price: 40, image: "coke.png" },

    { name: "Mirinda", price: 40, image: "mirinda.png" },

    { name: "Laptop", price: 40000, image: "laptop.png" },

    { name: "Mobile", price: 20000, image: "mobile.png" }

];

webserver.get("/products/:skip/:take", (request, response) => {

    let skip = Number(request.params.skip);
    let take = Number(request.params.take);

    setTimeout(() => {

        // slice never modifies existing but creats new array - Immutable Operations
        let portion = products.slice(skip, take + skip) ; 

        // Mutable: push, pop, splice (insert and delete in array)
        
        // Immutable: slice (extracting portion from array), concat, filter, map

        response.json(portion);

    }, 3000);

});