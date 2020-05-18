import Color from "../../Color";
import Piece from "../Piece";

class Knight extends Piece {

    static BLACK = new Knight(Color.BLACK);
    static WHITE = new Knight(Color.WHITE);

    constructor(color) {
        super(color === Color.WHITE ? '\u2658' : '\u265E', color);
    }

    getLetter() {
        return "N";
    }

    canAttackOnEmptyBoard(square, target) {
        return (Math.abs(square.col - target.col) === 2 &&  Math.abs(square.row - target.row) === 1) ||
                (Math.abs(square.col - target.col) === 1 &&  Math.abs(square.row - target.row) === 2);
    }

    getAttackedSquaresInternal(square, gameState) {
        return [
            square.withOffset(- 1, + 2),
            square.withOffset(- 1, - 2),
            square.withOffset(+ 1, + 2),
            square.withOffset(+ 1, - 2),
            square.withOffset(- 2, + 1),
            square.withOffset(- 2, - 1),
            square.withOffset(+ 2, + 1),
            square.withOffset(+ 2, - 1)
        ];
    }

}

export default Knight;