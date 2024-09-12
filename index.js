const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req, res, next) => {
    res.send('Welcome to the Personal Budget API')
})

app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`)
})

