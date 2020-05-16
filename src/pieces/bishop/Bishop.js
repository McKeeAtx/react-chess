import Color from "../../common/Color";
import Piece from "../Piece";

class Bishop extends Piece {

    static BLACK = new Bishop(Color.BLACK);
    static WHITE = new Bishop(Color.WHITE);

    constructor(color) {
        super(color === Color.WHITE ? '\u2657' : '\u265D', color);
    }

    getLetter() {
        return "B";
    }

    canAttackOnEmptyBoard(square, target) {
        return Math.abs(square.col - target.col) === Math.abs(square.row - target.row);
    }

    getAttackedSquaresInternal(square, gameState) {
        return [
            ...this.getAttackedSquaresWithOffset(square, square, -1, -1, gameState),
            ...this.getAttackedSquaresWithOffset(square, square, -1, +1, gameState),
            ...this.getAttackedSquaresWithOffset(square, square, +1, -1, gameState),
            ...this.getAttackedSquaresWithOffset(square, square, +1, +1, gameState)
        ]
    }

}

export default Bishop;