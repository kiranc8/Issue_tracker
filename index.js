// Import required modules and set up Express app
const express = require('express');
const app = express();
const dotenv = require("dotenv");
const path = require("path")
const db = require("./config/mongoose");

dotenv.config();
// Middleware to parse JSON data
app.use(express.json());

// Set the view engine to EJS and specify the views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to parse URL-encoded data
app.use(express.urlencoded());

// Serve static files from the "assets" directory
app.use(express.static("assets"));

// Use routes defined in separate files
app.use('/', require("./routes/index"));
app.use('/project', require("./routes/project"));
app.use('/issue', require("./routes/issue"));
const PORT = process.env.PORT || 5000

// Start the server and handle errors
app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error in running the server : ${err}`)
    }
    console.log(`Server is running on port : ${PORT}`);
})
