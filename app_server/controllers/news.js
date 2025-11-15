/* Reads data from JSON file */
var fs = require('fs');
var newsData = JSON.parse(fs.readFileSync('./data/news.json',
'utf8'));

/* Get News view */
const news = (req, res) => {
    res.render('news', {title: "Travlr Getaway", newsData});
};

module.exports = {
    news
};