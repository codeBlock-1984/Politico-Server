import officeController from '../controllers/office-controller';

const express = require('express');

const router = express.Router();

router.post('/', officeController.createOffice);
router.get('/', officeController.getOffices);
router.get('/:id', officeController.getOffice);

module.exports = router;
