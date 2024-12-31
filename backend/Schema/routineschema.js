const mongoose = require('mongoose');
const schema  = mongoose.Schema;

const routines = new schema({
    name : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    duration : {
        type : String,
        required : true
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    
},{ timestamps: true })

const dr = mongoose.model('daily-routines' , routines)
module.exports = dr;