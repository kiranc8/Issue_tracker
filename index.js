// Import required modules and set up Express app
const express = require('express');
const app = express();
const path = require("path")
const db = require("./config/mongoose");

// Middleware to parse JSON data
app.use(express.json());

// Set the view engine to EJS and specify the views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse URL-encoded data
app.use(express.urlencoded());

// Serve static files from the "assets" directory
app.use(express.static("assets"));

// Define the port for the server to listen on
const port = 8080;

// Use routes defined in separate files
app.use('/', require("./routes/index"));
app.use('/project', require("./routes/project"));
app.use('/issue', require("./routes/issue"));

// Start the server and handle errors
app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running the server : ${err}`)
    }
    console.log(`Server is running on port : ${port}`);
})
