const express = require('express')
const app = express()

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Skyler'})
})

app.get('/login', (req,res) => {
    res.render('login.ejs', {name: 'Skyler'})
})

app.get('/register', (req,res) => {
    res.render('register.ejs', {name: 'Skyler'})
})

app.post('/register', (req, res) => {
    
})

app.listen(3000)