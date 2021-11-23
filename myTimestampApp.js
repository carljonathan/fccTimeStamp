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

app.get('/api/:date?', (req, res) => {
    let currDate = req.params.date
    if (!date) {
        let UNIXTimeNow = Date.now() // get current dateTime in UNIX milliseconds
        let UTCTimeNow = new Date(UNIXTimeNow).toUTCString() // convert to UTC
        res.json({ UNIXTimeNow, UTCTimeNow })
    } else {
        let UNIXReqTime = Date(currDate)
        if (isNaN(UNIXReqTime)) {
            res.json({ "error": "Invalid date"})
        } else {
            let UTCReqTime = new Date(UNIXReqTime).toUTCString()
            res.json({ UNIXReqTime, UTCReqTime})
        }
    }
})
