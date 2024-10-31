const express = require('express');
const router = express.Router();
const { createEnvelope, getAllEnvelopes, getEnvelopeById, updateEnvelope, deleteEnvelope } = require('../controllers/envelopeController')

router.post('/envelopes', createEnvelope)

router.get('/envelopes', getAllEnvelopes)

router.get('/envelopes/:id', getEnvelopeById)

// PUT route to update a specific envelope by its ID
router.put('/envelopes/:id', updateEnvelope);  // New route to update an envelope

// DELETE route to remove a specific envelope by ID
router.delete('/envelopes/:id', deleteEnvelope);

module.exports = router;
