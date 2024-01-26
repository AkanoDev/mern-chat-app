const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUsers,
  findUser,
} = require("../Controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);
router.get("/find/:userId", findUser);

module.exports = router;
