require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

const db = mongoose.connection
db.on('error', error => console.log(error));
db.on('open', () => console.log('Connected to Database'));

app.use(express.json());

const gamesRouter = require('./routes/games');
app.use('/games', gamesRouter)

app.listen(3002, () => console.log("Server started"));