const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName :{
        type:String,
        required:[true , "please add the user name"],
        index: true
    },
    name:{
        type:String,
        required:[true,"please add the name"],
        unique:[true]
    },
    password:{
        type:String,
        required:[true,"please add the password"]
    }
})

module.exports = mongoose.model("User", userSchema);
