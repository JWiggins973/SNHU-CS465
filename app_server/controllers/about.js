/* Reads data from JSON file */
var fs = require('fs');
var aboutData = JSON.parse(fs.readFileSync('./data/aboutData.json',
'utf8'));


/* Get Contact view */
const about = (req, res) => {
    res.render('about', {title: "Travlr Getaway", aboutData});
};

module.exports = {
    about
};