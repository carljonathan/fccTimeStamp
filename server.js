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

app.get('/api/:date?', (req, res) => {
  const date = req.params.date
  let unix
  let utc
  if (!date) {
    unix = Date.now()
    utc = new Date(unix).toUTCString()
    res.json({ unix, utc })
  } else {
    const dateDate = new Date(date)
    if (!isNaN(dateDate) && dateDate instanceof Date) {
      unix = dateDate
      utc = dateDate.toUTCString()
      res.json({ unix, utc })
    }
    res.json({ error: 'Invalid Date' })
  }
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
