const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // to generate signed token
const expressJwt = require("express-jwt"); // for authoriazation check
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.signup = async (req, res) => {
  console.log("req.body", req.body);
  const user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  user.password = await bcrypt.hash(user.password, salt);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({ err: errorHandler(err) });
    }
    user.password = undefined;
    res.json({ user });
  });
};

exports.signin = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("invalid email or pass");

  const validUser = await bcrypt.compare(req.body.password, user.password);
  if (!validUser) return res.status(400).send("invalid email or pass");

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.cookie("t", token, { expire: new Date() + 9999 });

  const { _id, name, email, role } = user;
  return res.json({ token, user: { _id, name, email, role } });
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Successfully signout" });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;

  if (!user) {
    return res.status(403).json({
      error: "Access Denied!! Unauthorized User request.",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "Admin Only!! Access denied",
    });
  }
  next();
};
