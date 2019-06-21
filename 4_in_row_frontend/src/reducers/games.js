const initialState = {
    games: []
}

export const games = (state = initialState, action) => {
    const copyState = {...state};
    switch (action.type) {
        case 'SET_GAMES':
            const { gamesArr } = action;
            copyState.games = gamesArr;
            return copyState;
        default:
            return copyState;
    }
}


