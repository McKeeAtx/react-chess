import Color from "../../common/Color";
import Piece from "../Piece";

class Rook extends Piece {

    static BLACK = new Rook(Color.BLACK);
    static WHITE = new Rook(Color.WHITE);

    constructor(color) {
        super(color === Color.WHITE ? '\u2656' : '\u265C', color);
    }

    getLetter() {
        return "R";
    }

    getAllowedSquaresInternal(square, gameState) {
        let result = []
        result = result.concat(this.getAllowedSquaresWithOffset(square, square, -1, 0, gameState));
        result = result.concat(this.getAllowedSquaresWithOffset(square, square, +1, 0, gameState));
        result = result.concat(this.getAllowedSquaresWithOffset(square, square,  0, +1, gameState));
        result = result.concat(this.getAllowedSquaresWithOffset(square, square,  0, -1, gameState));
        return result;
    }

}

export default Rook;