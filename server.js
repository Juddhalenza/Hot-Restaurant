​
// *******************
// Requirements
// *******************
​
var express = require('express');
var path = require('path');
​
// *******************
// Variables
// *******************
​
var app = express();
const PORT = process.env.PORT || 6969;
​
// *******************
// Express handle parsing
// *******************
​
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
​
​
// *******************
// Dummy Data
// *******************
​
// Current Reservations Variable
var reservations = [
    {
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
​
// Waitlist Variable
var waitlist = []
​
​
// *******************
// Routes
// *******************
​
// Routes & Pages used
// *******************
// -- /
// -- /table
// -- /reserve
// -- /api/tables (json object)
// -- /api/waitlist (json object)
// *******************
​
// Home - HTML
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
​
// Tables - HTML
app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname, 'tables.html'));
});
​
// Reserve - HTML
app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
});
​
// Tables - JSON
app.get('/api/tables', function(req, res){
    return res.json(reservations);
});
​
// Waitlist - JSON
app.get('/api/waitlist', function(req,res){
    return res.json(waitlist);
})
​
// *******************
// Create Reservation / Waitlist
// *******************
​
app.post('/api/waitlist', function(req, res){
    var newWaitlist = req.body;
​
    console.log(newWaitlist);
​
    waitlist.push(newWaitlist);
​
    res.json(newWaitlist);
});
​
// *******************
// Start Server
// *******************
app.listen(PORT, function(){
    console.log("Now we wait, now we listen on: ",PORT);
})
Collapse








Message hot-restaurant


