const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/subscribers', {useNewUrlParser: true});

const db = mongoose.connection
db.on('error', error => console.log(error));
db.on('open', () => console.log('Connected to Database'));

app.listen(3002, () => console.log("Server started"));