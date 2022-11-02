
const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username:String,
    email:{type:String, unique:true},
    password:String,
    isAdmin:Boolean
})

userSchema.methods.generateAuth = function(){
    return jwt.sign({_id:this._id, username:this.username, isAdmin:this.isAdmin},'jwtPrivateKey')
}

function Validate(user){
    const schema = {
        email:Joi.string().required().email(),
        username:Joi.string().min(4).required(),
        password:Joi.string().min(4).required(),
        isAdmin:Joi.boolean()
    }
    return Joi.validate(user,schema)
}


const User = mongoose.model('User', userSchema)

exports.User = User
exports.validate = Validate