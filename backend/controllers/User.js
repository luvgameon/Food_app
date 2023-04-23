const express = require("express");
const router = express.Router();
const { validationResult } = require('express-validator');

const User = require("../models/createuser");
const myfun = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        password: req.body.password,
        email:  req.body.email,
        location: req.body.email,
        
      });
      res.json({ success: true });
    } catch (error) {
      console.log("errr", error);
      res.json({ success: false });
    }
  }
module.exports = {myfun};
