const signschema = require('../Schema/signschema') 
const express = require('express')
const jwt = require('jsonwebtoken')

const route = express.Router();

route.post('/signup' , async (req,res) => {
    const {username , password } = req.body

    try{
        const user = await signschema.signup(username , password)
        const token = jwt.sign({ id : user._id} , process.env.secret , {expiresIn:"2d"})
        res.json({ username , token })
    }catch(error){
        res.json({error : error.message})
    }
        
})

route.post('/signin' , async (req , res) => {
    const {username , password} = req.body

    try{
        const user = await signschema.signin(username,password)
        const token = jwt.sign({ id : user._id} , process.env.secret , {expiresIn:"2d"})
        res.json({ username , token })
    }catch(error){
        res.json({error:error.message})
    }
})

module.exports = route