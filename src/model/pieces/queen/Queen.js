import Color from "../../Color";
import Piece from "../Piece";

class Queen extends Piece {

    static BLACK = new Queen(Color.BLACK);
    static WHITE = new Queen(Color.WHITE);

    constructor(color) {
        super(color === Color.WHITE ? '\u2655' : '\u265B', color);
    }

    getValue() {
        return 9;
    }

    getLetter() {
        return "Q";
    }

    canAttackOnEmptyBoard(square, target) {
        return (Math.abs(square.col - target.col) === Math.abs(square.row - target.row)) ||
            square.col === target.col ||
            square.row === target.row;
    }

    getAttackedSquaresInternal(square, gameState) {
        return [
            ...this.getAttackedSquaresWithOffset(square, square, -1, 0, gameState),
            ...this.getAttackedSquaresWithOffset(square, square, +1, 0, gameState),
            ...this.getAttackedSquaresWithOffset(square, square,  0, +1, gameState),
            ...this.getAttackedSquaresWithOffset(square, square,  0, -1, gameState),
            ...this.getAttackedSquaresWithOffset(square, square, -1, -1, gameState),
            ...this.getAttackedSquaresWithOffset(square, square, -1, +1, gameState),
            ...this.getAttackedSquaresWithOffset(square, square, +1, -1, gameState),
            ...this.getAttackedSquaresWithOffset(square, square, +1, +1, gameState)
        ]
    }

}

export default Queen;