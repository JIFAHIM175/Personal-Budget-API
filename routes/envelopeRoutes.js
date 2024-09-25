const express = require('express');
const router = express.Router();
const { createEnvelope, getAllEnvelopes, getEnvelopeById } = require('../controllers/envelopeController')

router.post('/envelopes', createEnvelope)

router.get('/envelopes', getAllEnvelopes)

router.get('/envelopes/:id', getEnvelopeById)


module.exports = router;
