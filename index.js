const express = require('express');

const app = express();

app.get('/', (request, response ) => {
    return response.json({message:'hello fernando bonfim andrade'});
});

app.listen(3333);