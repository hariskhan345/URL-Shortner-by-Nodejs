const userModel = require("../models/users");
const { setUser } = require("../services/auth");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  await userModel.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password });

  if (!user)
    return res.render("login", {
      error: "Invalid Username or Password",
    });

  const token = setUser(user);
  res.cookie("uuid", token);
  return res.redirect("/");
};

module.exports = {
  createUser,
  loginUser,
};
