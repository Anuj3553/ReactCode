const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "Harryisagood$boy"
// Create a User using : POST "/api/auth/createuser". No login required
router.post('/createuser', [
    // Name must be at least 3 chars long
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    // Email must be an email
    body('email', 'Enter a valid email').isEmail(),
    // Password must be at least 5 chars long
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // If there are errors, return Bad request and the erors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Check whether the user with this mail exists already
    try{
    let user = await User.findOne({email : req.body.email});
    if(user){
        return res.status(400).json({error : "Sorry a user with this email already exists"})
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    // Create a new user
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
    })
    const data = {
        user :{
            id : user.id,
        }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({authtoken});
    }catch(err){
        console.log(err.message);
        res.status(500).send("Some Error Occured")
    }
})

module.exports = router;