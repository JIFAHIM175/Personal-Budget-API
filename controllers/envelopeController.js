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

module.exports = {
    createEnvelope
};

