// schema will here 
const express = require('express')
const mongoose  = require('mongoose')

const menschema =  new  mongoose.Schema({
    ranking : {
        type :Number,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true ,
        trim : true
    },
    dob : {
        type : Date,
        required : true ,
        trim : true
    },
    country : {
        type : String,
        required : true ,
        trim : true
    },
    score : {
        type : Number,
        required : true ,
        trim : true
    },
    event : {
        type : String,
       default : "100m"
    }
})

// create collection by the model method
const MenRakning  = mongoose.model('MenRakning', menschema)

module.exports = MenRakning
