// Import the Mongoose library
const mongoose = require('mongoose');

// Define a schema for the 'Issue' model
const issueSchema = new mongoose.Schema({
  title: String,           // Field to store the title of the issue
  description: String,     // Field to store the description of the issue
  labels: [String],        // Field to store an array of labels for the issue
  author: String,          // Field to store the author of the issue
  projectId: {             // Field to store the project ID associated with this issue
    type: mongoose.Schema.Types.ObjectId, // Using MongoDB's ObjectId data type
    ref: 'Project',         // Referencing the 'Project' model for association
  },
});

// Create and export the 'Issue' model based on the schema
module.exports = mongoose.model('Issue', issueSchema);
