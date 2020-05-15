import GameState from "../gamestate/GameState";
import {B4, C2, D2, E1, F8} from "../common/Square";
import King from "../pieces/king/King";
import Pawn from "../pieces/pawn/Pawn";
import Bishop from "../pieces/bishop/Bishop";

class Game {

    static INITIAL = new Game([GameState.initialBoard()], 0);
    // static INITIAL = new Game([GameState.emptyBoard()
    //     .setPiece(E1, King.WHITE)
    //     .setPiece(C2, Pawn.WHITE)
    //     .setPiece(D2, Pawn.WHITE)
    //     .setPiece(F8, Bishop.BLACK)
    //     .setPiece(E7, Pawn.BLACK)
    // ], 0);

    constructor(states, indexOfCurrentState) {
        this.states = this.removeUselessStates(states);
        this.indexOfCurrentState = indexOfCurrentState < this.states.length ? indexOfCurrentState : this.states.length - 1;
    }

    /**
     * Some states are created by clicks that haven't resulted in a move yet.
     * Once we have a move, we discard states that merely represent a click.
     */
    removeUselessStates(states) {
        let result = [];
        const totalMoves = states[states.length -1].moves.length;
        let moves = 0;
        for (let i = 0; i < states.length; i++) {
            if (states[i].moves.length < totalMoves) {
                if (i === 0 || states[i].moves.length > moves) {
                    result.push(states[i]);
                    moves = states[i].moves.length;
                }
            } else {
                result.push(states[i]);
            }
        }
        return result;
    }

    handleSquareClick(square) {
        const rewritePast = this.states.length > 1 && this.states[this.indexOfCurrentState].moves.length < this.states[this.states.length - 1].moves.length
        if (rewritePast) {
            return new Game(this.states.slice(0, this.indexOfCurrentState + 1), this.indexOfCurrentState).handleSquareClick(square);
        }
        const lastState = this.states[this.states.length - 1];
        const newStates = this.states.slice();
        const newState = lastState.handleSquareClick(square);
        newStates.push(newState);
        return new Game(newStates, newStates.length - 1);
    }

    handleMoveClick(index) {
        return new Game(this.states, index);
    }

}

export default Game;