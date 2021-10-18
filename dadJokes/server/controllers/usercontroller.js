const router = require("express").Router();
const {UserModel} = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// test endpoint
router.get("/test", (req, res)=>{
    res.send("your message")
})

// Register a User
router.post("/register", (req, res)=>{
    const {username, email, password} = req.body.user;
    User.create({
        username,
        email, 
        password: bcrypt.hashSync(password, 13)
    })
    .then(user=> res.status(201).json ({message: "New User Created!"}))
    .catch(error => res.status(500).json({message: "Something went wrong at /register", error}))
})


// res.send("user register endpoint")

// Login a user
router.post("/login", (req, res)=>{
    let {email, password} = req.body;
    User.findOne({where: {email}})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, (err,matches)=>{
                if(matches){
                    let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
                    // send back success
                    res.status(200).json({
                        message: "Login successful",
                        sessionToken: token
                })
                } else {
                    res.status(502).json({ error: "bad gateway"})
                }
            } )
        } else {
            res.status(500).json({error: "Failed to authenticate"})
        }
    })
})


module.exports = router;