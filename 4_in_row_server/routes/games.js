const express = require('express');
const router = express.Router();
const Game = require('../models/game')

//Getting ALL
router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})
//Getting ONE 
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
//Creating ONE

//Updating ONE
module.exports = router; 