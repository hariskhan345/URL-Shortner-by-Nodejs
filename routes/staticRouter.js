const express = require("express");
const { getAllurls } = require("../controllers");

const router = express.Router();

router.get("/", getAllurls);

module.exports = router;
