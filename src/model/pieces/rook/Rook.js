import Color from "../../Color";
import Piece from "../Piece";

class Rook extends Piece {

    static BLACK = new Rook(Color.BLACK);
    static WHITE = new Rook(Color.WHITE);

    constructor(color) {
        super(color === Color.WHITE ? '\u2656' : '\u265C', color);
    }

    getValue() {
        return 5;
    }

    getLetter() {
        return "R";
    }

    canAttackOnEmptyBoard(square, target) {
        return square.col === target.col ||
            square.row === target.row;
    }

    getAttackedSquaresInternal(square, gameState) {
        return [
            ...this.getAttackedSquaresWithOffset(square, square, -1, 0, gameState),
            ...this.getAttackedSquaresWithOffset(square, square, +1, 0, gameState),
            ...this.getAttackedSquaresWithOffset(square, square,  0, +1, gameState),
            ...this.getAttackedSquaresWithOffset(square, square,  0, -1, gameState)
        ];
    }

}

export default Rook;