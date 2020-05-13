import Color from "../Color";
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

    getAllowedMovesInternal(col, row, gameState) {
        return [
            {col: col + 1, row: row + 2},
            {col: col - 1, row: row + 2},
            {col: col + 1, row: row - 2},
            {col: col - 1, row: row - 2},
            {col: col + 2, row: row + 1},
            {col: col - 2, row: row + 1},
            {col: col + 2, row: row - 1},
            {col: col - 2, row: row - 1}
        ];
    }

}

export default Knight;