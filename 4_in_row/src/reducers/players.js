const initialState = {
    firstPlayerName: null,
}

export const players = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case 'SET_PLAYER_NAME':
            newState.firstPlayerName = action.name;
            return newState;
        default:
            return newState;
            
    }
}