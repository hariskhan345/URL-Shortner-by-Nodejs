const express = require("express");
const { getAllurls } = require("../controllers");

const router = express.Router();

router.get("/", getAllurls);

router.get("/signup", (req, res) => {
  return res.render("signup");
});


router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
