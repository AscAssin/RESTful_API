const mongoose = require('mongoose')

const taskShema = new mongoose.Schema({
    taskname: {
        type: String,
        require: true
    },
    decription: {
        type: String
    },
    startdate: {
        type: Date,
        require: true
    },
    enddate: {
        type: Date,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    googleid: {
        type: String
    },
    accestoken: {
        type: String
    },
    avatar: {
        type: String
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }]
})

let User = mongoose.model("User", userSchema)
let Task = mongoose.model("Task", taskShema)
module.exports = { User, Task }