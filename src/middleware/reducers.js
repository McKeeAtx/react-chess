import { combineReducers } from 'redux'
import {
    SQUARE_CLICKED
} from './actions'
import GameState from "../model/gamestate/GameState";

function handleSquareClicked(state, action) {
    if (state === undefined) {
        return GameState.initialBoard()
    }
    switch (action.type) {
        case SQUARE_CLICKED:
            return state.handleSquareClick(action.square);
        default:
            return state
    }
}

const gameReducers = combineReducers({
    global: handleSquareClicked
})

export default gameReducers