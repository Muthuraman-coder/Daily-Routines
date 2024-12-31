const express = require('express')
const route = express.Router()
const jwt = require('jsonwebtoken')

const {getroutines , getroutine , postroutines , deleteroutine } = require('../controller/routinecontrollers')

const verifytoken = (req , res , next) => {
    const token = req.headers['authorization'];
    if(!token){
        res.json({error : 'token is  required'})
    }

    jwt.verify(token , process.env.secret , (err , decode) => {
        if(err){
            res.json({error: 'token not verified'})
        }

        req.user = decode.id;
        next();
    })
}

route.get('/' , verifytoken , getroutines)

route.get('/:id', verifytoken , getroutine)

route.post('/' , verifytoken , postroutines)

route.delete('/:id' , verifytoken , deleteroutine)

module.exports = route ;