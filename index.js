const express = require('express');
const app = express();
const envelopeRoutes = require('./routes/envelopeRoutes')

const PORT = 3000;

app.use(express.json())

app.use('/', envelopeRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`)
})

