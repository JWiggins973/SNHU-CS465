var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/contacts');

/* GET Contact view. */
router.get('/', ctrlMain.contacts);

module.exports = router;
