var express = require('express');
var router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
var Controller = require('../controllers/controller')

router.get('/admin', (req, res) => {
    res.send("it works");
})
router.get('/all', Controller.getCrossers);

router.get('/:id', Controller.getById);

router.patch('/:id', Controller.edit);

router.delete('/:id', Controller.delete);

router.get('/search/:name', catchErrors(Controller.searchCrossers));

module.exports = router;