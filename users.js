const express = require("express");
const router = express.Router();
const User = require("../model/User");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/user");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utility/verifyToken");

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("LOGGED BY THAT USER");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("LOGGED BY THAT Admin");
});
router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getUser);

router.get("/", verifyAdmin, getUsers);

module.exports = router;
