
// Requirements
// *******************

var express = require('express');
var path = require('path');

// *******************
// Variables
// *******************

var app = express();
const PORT = process.env.PORT || 6969;

// *******************
// Express handle parsing
// *******************

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


// *******************
// Dummy Data
// *******************

// Current Reservations Variable
var reservations = [{
        customerName: 'Max',
        phoneNumber: 1234567890,
        cusomerEmail: 'max@class.com',
        customerId: 1
    },
    {
        customerName: 'Bob',
        phoneNumber: 1236797890,
        cusomerEmail: 'Bob@class.com',
        customerId: 2
    },
    {
        customerName: 'Frank',
        phoneNumber: 3784567890,
        cusomerEmail: 'Frank@class.com',
        customerId: 3
    },
    {
        customerName: 'Matt',
        phoneNumber: 1234567350,
        cusomerEmail: 'matt@class.com',
        customerId: 4
    },
    {
        customerName: 'Smith',
        phoneNumber: 1234579890,
        cusomerEmail: 'smith@class.com',
        customerId: 5
    }
]

// Waitlist Variable
var waitlist = []

// *******************
// Routes
// *******************

// Routes & Pages used
// *******************
// -- /
// -- /table
// -- /reserve
// -- /api/tables (json object)
// -- /api/waitlist (json object)
// *******************

// Home - HTML
app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, '1index.html'));
});

// Tables - HTML
app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'));
});

// Reserve - HTML
app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
});

// Tables - JSON
app.get('/api/tables', function (req, res) {
    return res.json(reservations);
});

// Waitlist - JSON
app.get('/api/waitlist', function (req, res) {
    return res.json(waitlist);
})

// *******************
// Create Reservation / Waitlist
// *******************

app.post('/api/waitlist', function (req, res) {

    // Available Tables
    var totalTables = 7;
    var currentReservations = 0;

        // Loop through reservations to determine number of reservations
        // update available with current number of reservations
        for (var i = 0; i < reservations.length; i++) {
            currentReservations++;
            console.log(currentReservations);
        }
        console.log('Final: ', currentReservations);


    // Determine if there is room
    if (currentReservations > totalTables) {

        // If no room push to waitlist array 
        // Respond with false
        var newRequest = req.body;
        waitlist.push(newRequest);
        res.json(newRequest);
        console.log('Route: 1');

    } else {

        // If there is room push to reservation array
        // Respond with True
        var newRequest = req.body;
        reservations.push(newRequest);
        res.json(newRequest);
        console.log('Route: 2');
    }

    console.log(newRequest);

});

// *******************
// Start Server
// *******************
app.listen(PORT, function () {
    console.log("Now we wait, now we listen on: ", PORT);
})