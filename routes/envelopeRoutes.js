const express = require('express');
const router = express.Router();
const { createEnvelope } = require('../controllers/envelopeController')

router.post('/envelopes', createEnvelope)

module.exports = router;
