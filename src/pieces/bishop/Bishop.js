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

    getAttackedSquaresInternal(square, gameState) {
        let result = []
        result = result.concat(this.getAttackedSquaresWithOffset(square, square, -1, -1, gameState));
        result = result.concat(this.getAttackedSquaresWithOffset(square, square, -1, +1, gameState));
        result = result.concat(this.getAttackedSquaresWithOffset(square, square, +1, -1, gameState));
        result = result.concat(this.getAttackedSquaresWithOffset(square, square, +1, +1, gameState));
        return result;
    }

}

export default Bishop;