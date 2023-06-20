const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const { compareSync } = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    const {userName, name, password} = req.body;
    if(!userName || !name || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({userName});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("Hashed password : ",hashedPassword);

    // create new user
    const user = await User.create({
        userName,
        name,
        password:hashedPassword,
    });
    console.log(`new user created is ${user}`);

    user.save().then(user => {
        res.send({
           success: true,
           message: "User created successfully",
           user: {
               id: user.id,
               userName: user.userName
           }
        })
    }).catch((err) => {
        res.send({
           success: false,
           message: "Error  while savng user",
           error: err
        })
    })
};

const loginUser = async (req, res) => {
    const {userName, password} = req.body;
    if(!userName || !password) {
        res.status(400).send({
            success: false,
            message: "Missing user name or password"
        })
    }
    User.findOne({userName: req.body.userName}).then(user => {
        if (!user) {
            res.status(401).send({
                success: false,
                message: "User does't exist"
            })
        }

        if(!compareSync(req.body.password, user.password)) {
            res.status(401).send({
                success: false,
                message: "Incorrect password"
            })
        }

        const payload = {
            userName: user.userName,
            id: user._id
        }

        const token = jwt.sign(payload, process.env.ACCESS_TOKEN, {expiresIn: "1d"});
        res.status(200).send({
                success: true,
                message: "Logged in successfully",
                token: "Bearer " + token
            })
    })
};

const protectedUser = async (req, res) => {
    res.status(200).send({
        success: true,
        user: {
            id: req.user._id,
            userName: req.user.userName
        }
    })
};

module.exports = { loginUser, protectedUser, registerUser };
