const userModel = require("../Models/userModel");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createToken = (_id) => {
  const jwtkey = process.env.JWT_KEY;

  return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
};

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (user)
      return res.status(400).json({
        status: "fail",
        message: "Duplicate entry! email is already exist.",
      });

    if (!name || !email || !password)
      //if field is blank
      return res.status(400).json({
        status: "fail",
        message: "All fields are required...",
      });

    if (!validator.isEmail(email))
      return res.status(400).json({
        status: "fail",
        message: "Invalid Email!",
      });

    if (!validator.isStrongPassword(password))
      return res.status(400).json({
        status: "fail",
        message:
          "Password must contain at least 1 capital letter, character and number.",
      });

    //data is created
    user = new userModel({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const token = createToken(user._id);

    res.status(200).json({
      _id: user._id,
      name,
      email,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "failed",
      message: "Page Not Found",
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });

    if (!user)
      //if email does not exist in the database
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password!",
      });

    const inValidPassword = await bcrypt.compare(password, user.password);

    if (!inValidPassword)
      //if password does not exist in the database
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password!",
      });

    const token = createToken(user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email,
      token,
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

exports.findUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userModel.findById(userId);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
