const express = require('express')
const app = express()

// get static files, like css etc.
app.use('/public', express.static(__dirname + '/public'))

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