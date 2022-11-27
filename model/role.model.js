const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var Role = new Schema({
    role:{
        type:String,
        required:true
    },
    level:{
        type:Number,
        required:true
    } 
})

module.exports = mongoose.model('Role', Role)