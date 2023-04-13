const bcryptjs = require("bcryptjs");
const User = require("../model/User");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const salt = await bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(req.body.password, salt);
    const newUser = await User.create({
      username: req.body.username,
      password: hash,
      email: req.body.email,
    });

    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      //  alert("No one with that user name")
      throw new Error("No one with that username");
    }
    const isPassword = await bcryptjs.compare(req.body.password, user.password);
    if (!isPassword) {
      //  alert("Wrong password")

      throw new Error(" Wrong pass");
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      "asdassaddsadqwfqwr"
    );

    const { password, isAdmin, ...otherdetails } = user._doc;

    console.log(user);
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(otherdetails);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { register, login };
