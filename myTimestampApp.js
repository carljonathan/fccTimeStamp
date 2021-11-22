const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// get static files, like css etc.
app.use('/public', express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// send template file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/api', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.json({"utc": req.time})
})
