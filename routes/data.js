const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.post("/add", dataController.addData);

module.exports = router;
