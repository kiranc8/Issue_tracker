// Import required modules and create an Express Router
const express = require('express');
const router = express.Router();
const projectController = require("../controller/projectController");

// Define routes for project-related actions

// Route to create a new project using a POST request
router.post("/create", projectController.createProject);

// Route to render the project creation form using a GET request
router.get("/create-project", projectController.renderCreateProject);

// Export the router to be used in other parts of the application
module.exports = router;
