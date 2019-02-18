var express = require('express');
var router = express.Router();
var crosserController = require('../controllers/crosserController')

router.get('/all', crosserController.getCrossers);

router.post('/add', crosserController.add);

router.get('/:id', crosserController.getById);
router.patch('/:id', crosserController.edit);

router.delete('/:id', crosserController.delete);


module.exports = router;
