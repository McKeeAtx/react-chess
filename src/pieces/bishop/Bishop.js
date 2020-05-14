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

    getAllowedMovesInternal(square, gameState) {
        let result = []
        result = result.concat(this.getAllowedMovesWithOffset(square, square, -1, -1, gameState));
        result = result.concat(this.getAllowedMovesWithOffset(square, square, -1, +1, gameState));
        result = result.concat(this.getAllowedMovesWithOffset(square, square, +1, -1, gameState));
        result = result.concat(this.getAllowedMovesWithOffset(square, square, +1, +1, gameState));
        return result;
    }

    getAllowedMovesWithOffset(originalSquare, square, offsetCol, offsetRow, gameState) {
        const newSquare = square.withOffset(offsetCol, offsetRow);
        if (newSquare) {
            if (gameState.getPiece(newSquare).color === Color.TRANSLUCENT) {
                let result = [];
                result.push(newSquare);
                result = result.concat(this.getAllowedMovesWithOffset(originalSquare, newSquare, offsetCol, offsetRow, gameState));
                return result;
            }
            if (gameState.getPiece(newSquare).color !== gameState.getPiece(originalSquare).color) {
                return [newSquare];
            }
        }
        return [];
    }

}

export default Bishop;