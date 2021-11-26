// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// route for API response on date request
app.get('/api/:date?', (req, res) => {
  const date = req.params.date
  let unix
  let utc
  // if no date is provided in the url, send today's date
  if (!date) {
    unix = Date.now()
    utc = new Date(unix).toUTCString()
    res.json({ unix, utc })
  } else {
    let dateDate
    // convert unix date to number from string
    const dateNum = Number(date)
    // check if url date is number
    if (!isNaN(dateNum)) {
      // create new Date object from url UNIX request
      dateDate = new Date(dateNum)
    } else {
      // if date is valid date string, convert to Date object
      dateDate = new Date(date)
    }
    // if the date is a valid instance of Date, responde with json
    if (!isNaN(dateDate) && dateDate instanceof Date) {
      unix = dateDate.getTime()
      utc = dateDate.toUTCString()
      res.json({ unix, utc })
    }
    // if date is not valid instance of Date, repsond with error
    res.json({ error: 'Invalid Date' })
  }
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
