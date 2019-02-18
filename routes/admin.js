var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController')

router.get('/admin', (req, res) => {
    res.send("it works");
})


module.exports = router;