const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a User using : POST "/api/auth/createuser". No login required
router.post('/createuser', [
    // Name must be at least 3 chars long
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    // Email must be an email
    body('email', 'Enter a valid email').isEmail(),
    // Password must be at least 5 chars long
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async(req, res) => {
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
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    
    // .then(user => res.json(user))
    // .catch(err => {console.log(err)
    // res.json({error : 'Please unique value for email', message : err.message})})
    res.json(user);
    }catch(err){
        console.log(err.message);
        res.status(500).send("Some Error Occured")
    }
})

module.exports = router;