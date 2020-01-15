const express = require('express');
const mongoose = require('mongoose');
const routes = require('./rotes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-w9emd.mongodb.net/test?retryWrites=true&w=majority',{
useNewUrlParser: true,
useUnifiedTopology: true,
});

// methodos : get, post, put, delete
// Tipos de parametros
// query paramns : request.query (filtros, ordenação, paginação)
// rote paramns : request.params (identificar um elemento para alteração ou remoção)
// body : request.body dados para criação de um registro

app.use(express.json());
app.use(routes);

app.listen(3333);