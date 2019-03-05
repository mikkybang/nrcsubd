var express = require('express');
var router = express.Router();
var Controller = require('../controllers/controller')

router.post('/add', Controller.add);

module.exports = router;
