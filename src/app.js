'use strict'

//Requires 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//

//App conf
const app = express();
const router = express.Router();
//

//Connection string
mongoose.connect('mongodb+srv://teste:teste@cluster0-9npqy.mongodb.net/nodestr', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
//

//Carrega as Models
const Product = require('./models/product');

//Carrega Rotas
const index = require('./routes/index');
const product = require('./routes/product');
//

//App run
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/products', product);
//


module.exports = app;
