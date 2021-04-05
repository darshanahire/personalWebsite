const mongoose = require("mongoose");
const validator = require("validator")

const userSchema = mongoose.Schema({
    fname:{
        type: String,
        required:true,
        minLength:3
    },
    lname:{
        type: String,
        required:true,
        minLength:3
    },
    email:{
        type: String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email Id");
            }
        }
    },
    mnumber:{
        type:Number,
        required:true,
        min:10
    },
    suggetion:{
        type:String,
        required:true,
        minLength:5
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// creating collection 
const User =mongoose.model("User",userSchema);

module.exports =User;