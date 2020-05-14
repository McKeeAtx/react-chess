import Color from "../../common/Color";
import Piece from "../Piece";

class Queen extends Piece {

    static BLACK = new Queen(Color.BLACK);
    static WHITE = new Queen(Color.WHITE);

    constructor(color) {
        super(color === Color.WHITE ? '\u2655' : '\u265B', color);
    }

    getLetter() {
        return "Q";
    }

    getAllowedMovesInternal(square, gameState) {
        let result = []
        result = result.concat(this.getAllowedMovesWithOffset(square, square, -1, 0, gameState));
        result = result.concat(this.getAllowedMovesWithOffset(square, square, +1, 0, gameState));
        result = result.concat(this.getAllowedMovesWithOffset(square, square,  0, +1, gameState));
        result = result.concat(this.getAllowedMovesWithOffset(square, square,  0, -1, gameState));
        result = result.concat(this.getAllowedMovesWithOffset(square, square, -1, -1, gameState));
        result = result.concat(this.getAllowedMovesWithOffset(square, square, -1, +1, gameState));
        result = result.concat(this.getAllowedMovesWithOffset(square, square, +1, -1, gameState));
        result = result.concat(this.getAllowedMovesWithOffset(square, square, +1, +1, gameState));
        return result;
    }

}

export default Queen;