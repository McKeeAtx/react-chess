import Color from "../Color";
import Piece from "../Piece";

class Pawn extends Piece {

    static BLACK = new Pawn(Color.BLACK);
    static WHITE = new Pawn(Color.WHITE);

    constructor(color) {
        super(color === Color.WHITE ? '\u2659' : '\u265F', color);
    }

    getAllowedMovesInternal(col, row, gameState) {
        const sign = this.color === Color.WHITE ? + 1 : -1;
        let result = [];
        /* pawn can move one rank if the square is empty */
        if (gameState.getPiece(col, row + 1 * sign).color === Color.TRANSLUCENT) {
            result.push({col: col, row: row + 1 * sign});
            if ((this.color === Color.WHITE && row === 1) || ((this.color === Color.BLACK && row === 6))) {
                /* pawns can move another rank in the initial move if the square is empty as well */
                if (gameState.getPiece(col, row + 2 * sign).color === Color.TRANSLUCENT) {
                    result.push({col: col, row: row + 2 * sign});
                }
            }
        }
        /* pawn can capture diagonally */
        const enemy = this.color === Color.WHITE ? Color.BLACK : Color.WHITE;
        const leftCaptureCandidate = gameState.getPiece(col - 1, row + 1 * sign);
        if (leftCaptureCandidate && leftCaptureCandidate.color === enemy) {
            result.push({col: col - 1, row: row + 1 * sign});
        }
        const rightCaptureCandidate = gameState.getPiece(col + 1, row + 1 * sign);
        if (rightCaptureCandidate && rightCaptureCandidate.color === enemy) {
            result.push({col: col + 1, row: row + 1 * sign});
        }
        return result;
    }

}

export default Pawn;