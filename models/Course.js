const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:true
    },

    trainerName:{
        type:String,
        required:true
    },

    duration:{
        type:String,
        required:true
    },

    fees:{
        type:Number,
        required:true
    },

    mode:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model("Course", courseSchema);
