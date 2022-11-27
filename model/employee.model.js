const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var Employee = new Schema({
    name:{
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
    dob:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Employee', Employee)