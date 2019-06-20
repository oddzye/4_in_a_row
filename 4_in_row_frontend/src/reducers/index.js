import { combineReducers } from 'redux'
import { players } from './players'
import { games } from './games'

const rootReducer = combineReducers({players, games})

export default rootReducer