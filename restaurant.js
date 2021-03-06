// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// table reservation (DATA)
// =============================================================
var reservation = [
  { 
    routeName: "",
    Name: "",
    Number: "",
    Email: "",
    Display_Name:""
  
  },
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Get all reservation
app.get("/all", function(req, res) {

  res.json(reservation);
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:reservation", function(req, res) {
  var chosen = req.params.reservation;

  res.json(reservation);
});

// Search for Specific Character (or all reservation) - provides JSON
app.get("/api/:reservation?", function(req, res) {
  var chosen = req.params.reservation;


  if (chosen) {
    console.log(chosen);


    for (var i = 0; i < reservation.length; i++) {
      if (chosen === reservation[i].routeName) {
        return res.json(reservation[i]);
      }
    }
    return res.json(false);
  }
// Create New appointments - takes in JSON input
  return res.json(reservation);
});



app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservation.push(newReservation);


  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
