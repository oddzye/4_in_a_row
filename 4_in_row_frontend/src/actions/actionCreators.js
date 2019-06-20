export const setPlayerName = (name, number) => ({
    type: 'SET_PLAYER_NAME',
    name,
    number
})

export const setGames = (gamesArr) => ({
    type: 'SET_GAMES',
    gamesArr
})
