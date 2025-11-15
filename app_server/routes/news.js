var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/news');

/* GET News view. */
router.get('/', ctrlMain.news);

module.exports = router;
