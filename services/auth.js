const jwt = require("jsonwebtoken");

const SecretKey = "my_secret_key";

const setUser = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    SecretKey
  );
};

const getUser = (token) => {
  if (!token) return null;

  try {
    return jwt.verify(token, SecretKey);
  } catch (error) {
    return null;
  }
};

module.exports = {
  setUser,
  getUser,
};
