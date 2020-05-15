import Color from "../../common/Color";
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

    getAttackedSquaresInternal(square, gameState) {
        return [
            square.withOffset(+ 1, + 2),
            square.withOffset(- 1, + 2),
            square.withOffset(+ 1, - 2),
            square.withOffset(- 1, - 2),
            square.withOffset(+ 2, + 1),
            square.withOffset(- 2, + 1),
            square.withOffset(+ 2, - 1),
            square.withOffset(- 2, - 1)
        ];
    }

}

export default Knight;