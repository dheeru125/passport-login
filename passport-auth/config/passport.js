const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require("../models/userModel.js");
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "Dheeraj@2000";
const passport = require("passport");

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
console.log(jwt_payload)
    try {
        const user = await User.findOne({ id: jwt_payload.id });
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err) {
            return done(err, false);
  }
}));
