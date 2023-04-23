const express=require('express');
const router = express.Router();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const secretkey="12345trfskfihofihoihfrihofr76"

const User=require('../models/createuser');
// const {myfun}=require('../controllers/User');
const { body, validationResult } = require('express-validator');

router.post('/login',
body('email').isEmail(),
body('password','Password Min len should be 5').isLength({ min: 5 }), 

 async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()});
    }
    let email=req.body.email;
    try {
      let login = await User.findOne({email});
      if(!login)
      {
        return res.status(400).json({ errors:"Incorrect email" });
      }
      const passwordcheck= await bcrypt.compare(req.body.password,login.password);
      console.log(passwordcheck);
       if(!passwordcheck)
       {
        return res.status(400).json({ errors:"Incorrect Password" });
       }
       const data={
        user:{
          id:login.id
        }
       }
       const authToken= jwt.sign(data,secretkey);
       return res.json({ success: true,authToken:authToken });
    } catch (error) {
      console.log("errr", error);
      res.json({ success: false });
    }
});

module.exports = router;