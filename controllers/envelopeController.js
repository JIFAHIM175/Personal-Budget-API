let envelopes = []  // This will temporarily store envelopes in memory

const createEnvelope = (req,res,next) => {
    const {name , amount} = req.body;

    if (!name || typeof name !== 'string' || !amount || typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({ error: 'Invalid envelope name or amount.' });
    }

    // Create the envelope object
    const newEnvelope = {
        id: envelopes.length + 1,  // Generate an ID
        name: name,
        amount: amount
    };

    // Add the new envelope to the array
    envelopes.push(newEnvelope);

    // Respond with the created envelope
    return res.status(201).json(newEnvelope);
};

const getAllEnvelopes = (req,res,next) => {
    res.status(200).json(envelopes)
}

const getEnvelopeById = (req, res) => {
    const { id } = req.params; // Get ID from request params
    const envelope = envelopes.find(env => env.id === parseInt(id)); // Find the envelope with the matching ID

    if (!envelope) {
        return res.status(404).json({ message: 'Envelope not found' }); // If no envelope is found, return a 404
    }

    res.status(200).json(envelope); // If envelope is found, return it with a 200 status
};

module.exports = {
    createEnvelope,
    getAllEnvelopes,
    getEnvelopeById
};

