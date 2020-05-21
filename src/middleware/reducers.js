import { combineReducers } from 'redux'
import {
    CPU_MOVE_REQUESTED,
    SQUARE_CLICKED
} from './actions'
import GameState from "../model/gamestate/GameState";

function gameStateReducer(state, action) {
    if (state === undefined) {
        return GameState.initialBoard()
    }
    switch (action.type) {
        case SQUARE_CLICKED:
            return state.handleSquareClick(action.square);
        case CPU_MOVE_REQUESTED:
            return state.handleCpuMove();
        default:
            return state
    }
}

const rootReducer = combineReducers({
    global: gameStateReducer
})

export default rootReducer