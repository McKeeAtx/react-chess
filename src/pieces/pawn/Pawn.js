import Color from "../Color";
import Piece from "../Piece";

class Pawn extends Piece {

    constructor(color) {
        super(color === Color.WHITE ? '\u2659' : '\u265F', color);
    }

    getAllowedMovesInternal(col, row, gameState) {
        const sign = this.color === Color.WHITE ? + 1 : -1;
        /* move one rank */
        let result = [{col: col, row: row + 1 * sign}];
        if ((this.color === Color.WHITE && row === 1) || ((this.color === Color.BLACK && row === 6))) {
            /* pawns can move 2 ranks in the initial move */
            result.push({col: col, row: row + 2 * sign});
        }
        return result;
    }

}

export default Pawn;