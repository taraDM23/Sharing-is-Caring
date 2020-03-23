const router = require("express").Router();
const itemRoutes = require("./items");

// Items routes
router.use("/item", itemRoutes);

module.exports = router;
