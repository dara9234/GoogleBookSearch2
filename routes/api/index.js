const router = require("express").Router();
const bookRoutes = require("./google");

// Book routes
// Adding second part of our api routes, google api or our own db mongo
router.use("/books", bookRoutes);
router.use("/google",apiRoutes);

module.exports = router;