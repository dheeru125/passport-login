const express = require("express");
const { 
    registerUser,
    loginUser,
    protectedUser
} = require ("../controllers/userController.js");
const passport = require("passport");
const router = express.Router();
const app = express();

app.use(passport.initialize());
require("../config/passport.js");

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/protected', passport.authenticate('jwt', {session: false}), protectedUser )

module.exports = { router };
