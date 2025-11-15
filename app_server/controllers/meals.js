/* Reads data from JSON file */
var fs = require('fs');
var meal = JSON.parse(fs.readFileSync('./data/meal.json',
'utf8'));


/* Get Meals view */
const meals = (req, res) => {
    res.render('meals', {title: "Travlr Getaway", meal});
};

module.exports = {
    meals
};