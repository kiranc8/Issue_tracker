// Import the Mongoose library
const mongoose = require('mongoose');

// Define a schema for the 'Project' model
const projectSchema = new mongoose.Schema({
  name: String,         // Field to store the name of the project
  description: String,  // Field to store the description of the project
  author: String,       // Field to store the author of the project
});

// Create and export the 'Project' model based on the schema
module.exports = mongoose.model('Project', projectSchema);
