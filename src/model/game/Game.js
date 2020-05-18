import GameState from "../gamestate/GameState";
import Engine from "../../engine/Engine";

class Game {

    static INITIAL = new Game([GameState.initialBoard()], 0);

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
        const newState = this.states[this.states.length - 1].handleSquareClick(square);
        return new Game([...this.states, newState], this.indexOfCurrentState + 1);
    }

    handleMoveClick(index) {
        return new Game(this.states, index);
    }

    handleCpuMove() {
        const move = new Engine().nextMove(this.states[this.states.length - 1]);
        if (move) {
            return this.handleSquareClick(move.from).handleSquareClick(move.to);
        }
        return this;
    }

}

export default Game;