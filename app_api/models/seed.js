// Bring in thr DB connection and trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read from Schema
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// Delete any existing reccords , then insert seed data
const seedDB = async() => 
{
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

// Close the MongoDB connection and exit
seedDB().then(async() => 
{
    await Mongoose.connection.close();
    process.exit(0);
});
