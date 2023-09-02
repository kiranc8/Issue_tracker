// Import required modules and create an Express Router
const express = require('express');
const router = express.Router();
const projectController = require("../controller/projectController");
const issueController = require("../controller/issueController");

// Define routes for project-related actions

// Route to get all projects using a GET request
router.get("/", projectController.getProjects);

// Route to render the create issue page for a specific project using a GET request
router.get("/create-issue/:projectId", issueController.renderCreateIssue);

// Export the router to be used in other parts of the application
module.exports = router;
