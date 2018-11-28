// init project
const express = require('express'); // the library we will use to handle requests
const app = express(); // instantiate express
const mongodb = require('mongodb');
app.use(require("cors")()) // allow Cross-domain requests 
app.use(require('body-parser').json()) // automatically parses request data to JSON

// base route
app.get("/", function (request, response) {
  response.send("TODO") // always responds with the string "TODO"
});

// base route
app.post("/", function (request, response) {
  response.send("TODO") // always responds with the string "TODO"
});

app.put("/", function (request, response) {
  response.send("TODO") // always responds with the string "TODO"
});


// listen for requests, the process.env.PORT is needed because
// we are using glitch, otherwise you could have written 80 or whatever
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});