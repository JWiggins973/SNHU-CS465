/* Reads data from JSON file */
var fs = require('fs');
var contact = JSON.parse(fs.readFileSync('./data/contact.json',
'utf8'));


/* Get Contact view */
const contacts = (req, res) => {
    res.render('contacts', {title: "Travlr Getaway", contact});
};

module.exports = {
    contacts
};