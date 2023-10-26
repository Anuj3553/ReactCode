const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017');

const NotesSchema = new Schema({
    title:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    tag:{
        type : String,
        default : "General"
    },
    date:{
        type : Date,
        default : Date.now
    },
})

module.exports = mongoose.model('notes', NotesSchema);