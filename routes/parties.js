import partyController from '../controllers/party-controller';

const express = require('express');

const router = express.Router();

router.post('/', partyController.createParty);


module.exports = router;
