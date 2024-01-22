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
        message: "duplicate entry!, email is already exist",
      });

    if (!name || !email || !password)
      //if field is blank
      return res.status(400).json({
        status: "fail",
        message: "Name, Email and Password are required",
      });

    if (!validator.isEmail(email))
      return res.status(400).json({
        status: "fail",
        message: "Invalid Email",
      });

    if (!validator.isStrongPassword(password))
      return res.status(400).json({
        status: "fail",
        message:
          "Password must contain at least 1 capital letter, character and number",
      });

    //data is created
    user = new userModel({ name, email, password });

    const random = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, random);

    await user.save();

    const token = createToken(user._id);

    res.status(200).json({
      status: "success",
      data: {
        // id: user._id,
        name,
        email,
        token,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "failed",
      message: "Page Not Found",
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (!user)
      //if email does not exist in the database
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password, entry does not exist",
      });

    const inValidPassword = await bcrypt.compare(password, user.password);

    if (!inValidPassword)
      //if password does not exist in the database
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password, entry does not exist",
      });

    const token = createToken(user._id);

    res.status(200).json({
      status: "login successfully",
      data: {
        // id: user._id,
        name: user.name,
        email,
        token,
      },
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).json({
      status: "success found user",
      result: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

exports.findUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.findById(id);

    res.status(200).json({
      status: "successfully found user",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
