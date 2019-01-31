import partyController from '../controllers/party-controller';

const express = require('express');

const router = express.Router();

router.post('/', partyController.createParty);
router.get('/', partyController.getParties);
router.get('/:id', partyController.getParty);

module.exports = router;
