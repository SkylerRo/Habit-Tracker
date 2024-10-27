const express = require('express')
const pasth = require("path")
const bcrypt = require("bcrypt")

const app = express()

app.set('view engine', 'ejs')

app.use(express.static("public"))

app.get("/", (req,res) => {
    res.render("login")
})

app.get("/signup", (req,res) => {
    res.render("signup")
})

const port = 3001 
app.listen(port, () => {
    
})