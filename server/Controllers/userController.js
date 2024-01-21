const userModel = require("../Models/userModel");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createToken = (_id) => {
  const jwtkey = process.env.JWT_KEY;

  return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (user)
      return res.status(400).json({
        status: "fail",
        message: "duplicate entry!, email is already exist",
      });

    if (!name || !email || !password)
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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (!user)
      return res.status(400).json({
        status: "fail",
        message: "Invalid email or password, entry does not exist",
      });

    const inValidPassword = await bcrypt.compare(password, user.password);

    if (!inValidPassword)
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
    console.log(err);
  }
};

module.exports = { registerUser, loginUser };
