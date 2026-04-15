const { getUser } = require("../services/auth");

const UserRestrictionForAuth = async (req, res, next) => {
  const userUid = req.cookies?.uuid;
  if (!userUid) return res.redirect("/login");

  const user = getUser(userUid);

  if (!user) return res.redirect("/login");

  res.user = user;
  next();
};

const checkUser = async (req, res, next) => {
  const userUid = req.cookies?.uuid;

  const user = getUser(userUid);

  res.user = user;
  next();
};

module.exports = { UserRestrictionForAuth, checkUser };
