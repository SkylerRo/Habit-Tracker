const mongoose = require('mongoose')
const connect = mongoose.connect("mongodb://localhost:27017/Login-tut")

connect.then(() => {
    console.log("Database connected")
})
.catch(() => {
    console.log("cannot connect database")
})

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    }
})