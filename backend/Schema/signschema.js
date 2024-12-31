const mongoose = require('mongoose')
const schema = mongoose.Schema
const bcrypt = require('bcrypt')

const sign = new schema({
    username:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    }
})

sign.statics.signup = async function(username , password){

    if(!username || !password){
        throw Error('all field must be filled')
    }

    const sameuser = await this.findOne({username})
    if(sameuser){
        throw Error("username is already taken")
    }

    const hash = await bcrypt.hash(password , 10)
    const newuser = await this.create({username , password : hash})
    await newuser.save()

    return newuser;
}

sign.statics.signin = async function(username , password){

    if(!username || !password ){
        throw Error('all fields must be filled')
    }

    const user = await this.findOne({username})
    if(!user){
        throw Error("username is not found")
    }

    const match = await bcrypt.compare(password , user.password)
    if(!match){
        throw Error("password is wrong")
    }

    return user
}

module.exports = mongoose.model("rouitne-users" , sign)