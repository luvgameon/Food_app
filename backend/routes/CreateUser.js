const express=require('express');
const router = express.Router();

const User=require('../models/createuser');
const bcrypt=require("bcrypt");
// const {myfun}=require('../controllers/User');
const { body, validationResult } = require('express-validator');

router.post('/createuser',
body('email').isEmail(),

body('password','Password Min len should be 5').isLength({ min: 5 }),
 async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt= await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password,salt);
    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email:  req.body.email,
        location: req.body.location,
        
      });
      res.json({ success: true });
    } catch (error) {
      console.log("errr", error);
      res.json({ success: false });
    }
});

module.exports = router;