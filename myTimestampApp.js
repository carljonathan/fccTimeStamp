const express = require('express')
const app = express()

// get static files, like css etc.
app.use('/public', express.static(__dirname + '/public'))

// send template file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/api/:date', (req, res) => {
    const input = req.params.date
    let output;
    if (!input) output = new Date().toString()
    input
}, (req, res) => {
    res.json({"utc": output})
})