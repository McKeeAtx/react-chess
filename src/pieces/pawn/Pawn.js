import Color from "../Color";
import Piece from "../Piece";

class Pawn extends Piece {

    constructor(color) {
        super(color === Color.WHITE ? '\u2659' : '\u265F', color);
    }

    getTargetSquaresInternal(col, row, pieces) {
        const sign = this.color === Color.WHITE ? + 1 : -1;
        return [{col: col, row: row + 1 * sign}, {col: col, row: row + 2 * sign}];
    }

}

export default Pawn;