const Project = require("../models/projectSchema");

// Controller function to retrieve and render all projects
module.exports.getProjects = async (req, res) => {
    try {
        const result = await Project.find({});
        if (!result || result.length === 0) {
            return res.render("home", {
                projects: [],
                message: "No projects available", // Added a message for no projects
            });
        }
        return res.render("home", {
            projects: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

// Controller function to create a new project
module.exports.createProject = (req, res) => {
    const { name, description, author } = req.body;
    Project.create({ name, description, author })
        .then(result => {
            // Check if the result indicates success (you might need to adapt this check based on your specific model)
            if (result && result._id) {
                res.redirect('/');
            } else {
                res.send('Could not create Project');
            }
        })
        .catch(err => {
            console.log(err);
            res.send('Some error occurred');
        });
};

// Controller function to render the page for creating a new project
module.exports.renderCreateProject = async (req, res) => {
    return res.render("create-project.ejs");
};
