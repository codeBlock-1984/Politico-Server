import officeController from '../controllers/office-controller';

const express = require('express');

const router = express.Router();

router.post('/', officeController.createOffice);

module.exports = router;
