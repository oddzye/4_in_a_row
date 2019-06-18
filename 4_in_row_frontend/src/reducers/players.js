const initialState = {
    firstPlayerName: null,
    secondPlayerName: null
}

export const players = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case 'SET_PLAYER_NAME':
            const { name, number } = action;
            if (number === 1) newState.firstPlayerName = name;
            else newState.secondPlayerName = name;
            return newState;
        default:
            return newState;  
    }
}