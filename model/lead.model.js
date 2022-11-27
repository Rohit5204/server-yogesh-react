const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var Lead = new Schema({
    leadName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileno:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Lead', Lead)