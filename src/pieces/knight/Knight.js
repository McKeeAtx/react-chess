import Color from "../Color";
import Piece from "../Piece";

class Knight extends Piece {

    constructor(color) {
        super(color === Color.WHITE ? '\u2658' : '\u265E', color);
    }

    getTargetSquaresInternal(col, row, pieces) {
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