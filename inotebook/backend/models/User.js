const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017');

const UserSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    },
    date:{
        type : Date,
        default : Date.now
    },
})

module.exports = mongoose.model('user', UserSchema);