import officeController from '../controllers/office-controller';

const express = require('express');

const router = express.Router();

router.post('/', officeController.createOffice);
router.get('/', officeController.getOffices);

module.exports = router;
