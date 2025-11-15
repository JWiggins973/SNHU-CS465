/* Reads data from JSON file */
var fs = require('fs');
var room = JSON.parse(fs.readFileSync('./data/room.json',
'utf8'));

/* Get Rooms view */
const rooms = (req, res) => {
    res.render('rooms', {title: "Travlr Getaway", room});
};

module.exports = {
    rooms
};