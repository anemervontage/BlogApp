const mongoose = require('mongoose')

const Schema = mongoose.Schema


//Schema for data required by blog: blog title, blog author, and the blog itself.

const workoutSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required: true
    },
    blog: {
        type:String,
        required: true
    }


}, {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)
