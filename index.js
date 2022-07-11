const express = require('express');
const app = express();

const HOST = 'localhost';
const PORT = 3000;

app.get('/ip', (req, res) => {
    res.send(`Your ip is ${req.ip}`);
});

app.listen(PORT, HOST, () =>
    console.log(`Server listening on ${HOST}:${PORT}`)
);