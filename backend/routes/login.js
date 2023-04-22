const express=require('express');
const router = express.Router();

const User=require('../models/createuser');
// const {myfun}=require('../controllers/User');
const { body, validationResult } = require('express-validator');

router.post('/login',
body('email').isEmail(),
body('password','Password Min len should be 5').isLength({ min: 5 }), 

 async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email=req.body.email;
    try {
      let login = await User.findOne({email});
      if(!login)
      {
        return res.status(400).json({ errors:"Try logging with different email" });
      }
       if(req.body.password!==login.password)
       {
        return res.status(400).json({ errors:"Try logging with different Password" });
       }
       return res.json({ success: true });
    } catch (error) {
      console.log("errr", error);
      res.json({ success: false });
    }
});

module.exports = router;