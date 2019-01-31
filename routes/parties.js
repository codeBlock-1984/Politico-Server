import partyController from '../controllers/party-controller';

const express = require('express');

const router = express.Router();

router.post('/', partyController.createParty);
router.get('/', partyController.getParties);
router.get('/:id', partyController.getParty);
router.patch('/:id', partyController.editParty);
router.delete('/:id', partyController.deleteParty);

module.exports = router;
