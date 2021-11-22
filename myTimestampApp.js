const express = require('express')
const app = express()

// get static files, like css etc.
app.use('/public', express.static(__dirname + '/public'))

// send template file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})