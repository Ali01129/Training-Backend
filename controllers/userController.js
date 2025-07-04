const USER = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

//@desc create a user account
//@route POST /api/users/register
//@access public

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      const error = new Error("All fields are mandatory");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await USER.findOne({ email });
    if (existingUser) {
      const error = new Error("User with this email is already present");
      error.statusCode = 400;
      return next(error);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await USER.create({
      username,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      msg: "User created successfully",
      id: newUser._id,
      email: newUser.email,
    });
  } catch (error) {
    next(error);
  }
};

//@desc login user
//@route GET /api/users/login
//@access public
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("Email and Password Fields are required");
      error.statusCode = 400;
      next(error);
    }
    const user = await USER.findOne({ email });
    const passwordMatch=await bcrypt.compare(password, user.password);
    if (user && passwordMatch) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user._id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'60m'}
      );
      res.status(200).json({ accessToken });
    } else {
      const error = new Error("Email or Password is not valid");
      error.statusCode = 401;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

//@desc get information of current user
//@route GET /api/users/current
//@access private
const currentUser = async (req, res) => {
  res.json(req.user);
};

module.exports = { registerUser, loginUser, currentUser };
