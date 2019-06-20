const initialState = {
    games: []
}

export const games = (state = initialState, action) => {
    const copyState = {...state};
    switch (action.type) {
        case 'SET_GAMES':
            const { games } = action;
            copyState.games = games;
            return copyState;
        default:
            return copyState;
    }
}


