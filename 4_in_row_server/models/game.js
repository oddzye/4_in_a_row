const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    firstPlayerName: {
        type: String,
        required: true
    },
    secondPlayerName: {
        type: String,
        required: true
    },
    gameState: {
        type: [[]],
        required: true,
        default: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
          ]
    }
})

module.exports = mongoose.model('Game', gameSchema);