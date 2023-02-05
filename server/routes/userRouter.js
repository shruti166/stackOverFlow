const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
require("dotenv").config();
const userRouter = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;
userRouter.post("/register", async (req, res) => {
  const user = req.body;
  let { name, email, password } = user;

  let existingUser = await userModel.findOne({
    email,
  });

  if (existingUser) {
    return res.status(400).send({
      status: "error",
      message: "User already exists",
    });
  } else {
    password = bcrypt.hashSync(password);
    let user = await userModel.create({
      name,
      email,
      password,
    });
    user = user.toJSON();
    delete user.password;

    return res.send({
      status: "Success",
      data: user,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const user = req.body;

  let { email, password } = user;

  let existingUser = await userModel.findOne({ email });
  console.log(user);
  if (existingUser) {
    let match = bcrypt.compareSync(password, existingUser.password);

    if (match) {
      let token = jwt.sign(
        {
          name: existingUser.name,
          email: existingUser.email,
        },
        JWT_SECRET
      );

      console.log(token, "token");
      // Verifying...
      let result = jwt.verify(token, JWT_SECRET);
      console.log(result, "result or payload");
      // Decoding...
      result = jwt.decode(token);
      console.log(result, "decrypted result");

      return res.send({
        status: "success",
        data: token,
      });
    } else {
      return res.status(400).send({
        status: "error",
        message: "incorrect password !",
      });
    }
  } else {
    return res.status(400).send({
      status: "error",
      message: "user does not exist",
    });
  }
});

module.exports = userRouter;
