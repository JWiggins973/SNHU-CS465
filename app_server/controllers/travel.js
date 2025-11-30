// Var for API endpoint and list options
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: 
    {
        'Accept': 'application/json'
    }
};

/* Reads data from JSON file */
//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

/* Get Travel view */
const travel = async function(req, res, next) 
{   // console log for debugging
    //. console.log('TRAVEL CONTROLLER BEGIN"); 
    await fetch(tripsEndpoint, options)
    .then(res => res.json())
    .then(json => 
    {
        //console.log(json);
        
        // additional error handling
        let message = null;
        if (!(json instanceof Array))
        {
            message = "API lookup error";
            json =[];
        }
        else 
        {
            if (!json.length) 
            {
                message = "No trip exist in our database";
            }
        }
        res.render('travel', {title: "Travlr Getaway", trips: json, message}); 
    })
    .catch((err) => res.status(500).send(err.message));
   
};

module.exports = {
    travel
};