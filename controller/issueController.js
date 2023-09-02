const Issue = require("../models/issueSchema");

// Controller function to get issues based on filter criteria
module.exports.getIssue = async (req, res) => {
    const projectId = req.params.projectId;
    const { author, labels, search } = req.query;

    // Construct the filter object based on query parameters
    const filter = { projectId };

    if (author) {
        filter.author = author;
    }

    if (labels) {
        const labelArray = labels.split(",");
        filter.labels = { $in: labelArray };
    }

    if (search) {
        const searchRegex = new RegExp(search, "i");
        filter.$or = [{ title: searchRegex }, { description: searchRegex }];
    }

    try {
        const result = await Issue.find(filter);

        if (!result || result.length === 0) {
            return res.render("issue-details", {
                issues: [],
                projectId: projectId,
                message: "No issues found", // Added a message for no issues
            });
        }

        return res.render("issue-details", {
            issues: result,
            projectId: projectId,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

// Controller function to create a new issue
module.exports.createIssue = (req, res) => {
    const { title, description, labels, author } = req.body;
    const newLabel = labels.split(",");
    const projectId = req.params.projectId;
    Issue.create({ title, description, labels: newLabel, author, projectId })
        .then(result => {
            if (result && result._id) {
                res.redirect(`/issue/${projectId}`);
            } else {
                res.send('Could not create Issue');
            }
        })
        .catch(err => {
            console.log(err);
            res.send('Some error occurred');
        });
};

// Controller function to render the page for creating a new issue
module.exports.renderCreateIssue = (req, res) => {
    return res.render("create-issue.ejs", {
        projectId: req.params.projectId
    });
};
