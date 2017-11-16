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
    Name: "",
    Number: "",
    Email: "",
    Display-Name:""
  
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
<<<<<<< HEAD
  res.json(reservations);
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/:reservations", function(req, res) {
  var chosen = req.params.reservations;
=======
  res.json(reservation);
});

// Search for Specific Character (or all reservation) - provides JSON
app.get("/api/:reservation?", function(req, res) {
  var chosen = req.params.reservation;
>>>>>>> c4dee83224fd029bce3a46de118fa0fe55196d0d

  if (chosen) {
    console.log(chosen);

<<<<<<< HEAD
    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].routeName) {
        return res.json(reservations[i]);
=======
    for (var i = 0; i < reservation.length; i++) {
      if (chosen === reservation[i].routeName) {
        return res.json(reservation[i]);
>>>>>>> c4dee83224fd029bce3a46de118fa0fe55196d0d
      }
    }
    return res.json(false);
  }
<<<<<<< HEAD
  return res.json(reservations);
});

// Create New appointments - takes in JSON input
=======
  return res.json(reservation);
});

// Create New reservation - takes in JSON input
>>>>>>> c4dee83224fd029bce3a46de118fa0fe55196d0d
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

<<<<<<< HEAD
  reservations.push(newReservation);
=======
  reservation.push(newReservation);
>>>>>>> c4dee83224fd029bce3a46de118fa0fe55196d0d

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
