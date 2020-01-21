const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-w9emd.mongodb.net/radarDev?retryWrites=true&w=majority',{
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
});

// methodos : get, post, put, delete
// Tipos de parametros
// query paramns : request.query (filtros, ordenação, paginação)
// rote paramns : request.par   ams (identificar um elemento para alteração ou remoção)
// body : request.body dados para criação de um registro

//app.use(cors({ origin : 'http://localhost:3000' }));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);