const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips'); 

// GET: /trips - list all trips
// Regardless of outcome, repsonse must include HTMl status code 
// and  JSON message to the requesting client 
const tripsList = async(req, res) => 
{
    const q = await Model
        .find({}) // no filter, return all records 
        .exec();

        // uncomment to show result of query on console
        // console.log(q);

        if (!q)
        {
            // database return no data
            return res
                    .status(404)
                    .json(err);
        }
        else 
        {
            // return resulting trips list
            return res 
                    .status(200)
                    .json(q);
        }
};

// GET: /trips/:code  - list s single trip
// Regardless of outcome, repsonse must include HTMl status code 
// and  JSON message to the requesting client 
const tripsFindByCode = async(req, res) => 
{
    const q = await Model
        .find({'code' : req.params.tripCode}) // Return single record
        .exec();

        // uncomment to show result of query on console
        // console.log(q);

        if (!q)
        {
            // database return no data
            return res
                    .status(404)
                    .json(err);
        }
        else 
        {
            // return resulting trips list
            return res 
                    .status(200)
                    .json(q);
        }
};

module.exports = 
{
    tripsList,
    tripsFindByCode
};