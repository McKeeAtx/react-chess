import GameState from "../gamestate/GameState";

class Game {

    static INITIAL = new Game([GameState.initialBoard()], 0);

    constructor(states, indexOfCurrentState) {
        this.states = this.removeNonSuffixClickStates(states);
        this.indexOfCurrentState = indexOfCurrentState < this.states.length ? indexOfCurrentState : this.states.length - 1;
    }

    removeNonSuffixClickStates(states) {
        let result = [];
        const totalMoves = states[states.length -1].moves.length;
        let moves = 0;
        for (let i = 0; i < states.length; i++) {
            if (states[i].moves.length < totalMoves) {
                if (i == 0 || states[i].moves.length > moves) {
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