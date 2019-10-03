const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const server = express();

const uri = 'mongodb+srv://omnistack:omnistack@cluster0-u49dg.mongodb.net/omnistack9?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch((err) => console.error(err));

server.use(cors());
server.use(express.json());
server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
server.use(routes);

server.listen(3333);