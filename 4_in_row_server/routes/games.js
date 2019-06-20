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

router.post('/', async (req, res) => {
    try {
        const game = await new Game(req.body);
        game.save()
            .then(game => {
                res.status(200).json({'game': 'game added succesfully'})
            })
            .catch(err => {
                res.status(400).send('adding new game failed')
            })
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})
//Updating ONE
module.exports = router; 