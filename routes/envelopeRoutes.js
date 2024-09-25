const express = require('express');
const router = express.Router();
const { createEnvelope, getAllEnvelopes } = require('../controllers/envelopeController')

router.post('/envelopes', createEnvelope)

router.get('/envelopes', getAllEnvelopes)

module.exports = router;
