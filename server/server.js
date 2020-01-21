const express = require('express');
const port = 3000;

const app = express();

app.get('/', (request, response) => {
    response.header('Access-Control-Allow-Origin', '*');    // To resolve CORS blocking issue
    response.send('Hola! Mucho Gusto');
});

app.listen(port, () => {
    console.log(`Server up on ${port}.`);
});