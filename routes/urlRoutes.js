const express = require("express");
const { postURl,  getURLAnalytics } = require("../controllers");

const router = express.Router();

router.post("/", postURl);
router.get("analytics/:shortId", getURLAnalytics);

module.exports = router;
