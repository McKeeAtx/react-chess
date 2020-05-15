import Color from "../../common/Color";
import Piece from "../Piece";

class King extends Piece {

    static BLACK = new King(Color.BLACK);
    static WHITE = new King(Color.WHITE);

    constructor(color) {
        super(color === Color.WHITE ? '\u2654' : '\u265A', color);
    }

    getLetter() {
        return "K";
    }

    getAllowedSquaresInternal(square, gameState) {
        return [
            square.withOffset(-1, -1),
            square.withOffset(0, -1),
            square.withOffset(+1, -1),
            square.withOffset(-1, 0),
            square.withOffset(+1, 0),
            square.withOffset(-1, +1),
            square.withOffset(0, +1),
            square.withOffset(+1, +1)
        ];
    }

}

export default King;