// Import required modules and create an Express Router
const express = require('express');
const router = express.Router();
const issueController = require("../controller/issueController");

// Define routes for issue-related actions

// Route to get issues for a specific project using a GET request
router.get("/:projectId", issueController.getIssue);

// Route to create a new issue for a specific project using a POST request
router.post("/:projectId/create", issueController.createIssue);

// Export the router to be used in other parts of the application
module.exports = router;
