 
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
// if API routes are the target, then redirect that to the proper route
// this is where we start our routes by "adding" /api to the url path
router.use("/api", apiRoutes);

// Every other request will be sent to the React app, if no API routes are hit
// this sends the html file in the build production, once the build is compiled
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;