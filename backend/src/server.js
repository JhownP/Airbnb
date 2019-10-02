const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

const uri = 'mongodb+srv://omnistack:omnistack@cluster0-u49dg.mongodb.net/omnistack9?w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch((err) => console.error(err));

server.use(express.json());
server.use(routes);

server.listen(3333);