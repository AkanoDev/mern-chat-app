const express = require("express");
const {
  registerUser,
  loginUser,
  findAllUsers,
  findUser,
} = require("../Controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", findAllUsers);
router.get("/:id", findUser);

module.exports = router;
