var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/rooms');

/* GET Rooms view. */
router.get('/', ctrlMain.rooms);

module.exports = router;
