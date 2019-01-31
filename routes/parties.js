import partyController from '../controllers/party-controller';

const express = require('express');

const router = express.Router();

router.post('/', partyController.createParty);
router.get('/', partyController.getParties);

module.exports = router;
