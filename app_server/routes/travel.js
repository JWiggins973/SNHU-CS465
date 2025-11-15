var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/travel');

/* GET Travel view. */
router.get('/', ctrlMain.travel);

module.exports = router;
