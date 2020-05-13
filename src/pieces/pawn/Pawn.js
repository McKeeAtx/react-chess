import Color from "../../common/Color";
import Piece from "../Piece";
import Squares from "../../common/Squares";

class Pawn extends Piece {

    static BLACK = new Pawn(Color.BLACK);
    static WHITE = new Pawn(Color.WHITE);

    constructor(color) {
        super(color === Color.WHITE ? '\u2659' : '\u265F', color);
    }

    getLetter() {
        return "";
    }

    getAllowedMovesInternal(square, gameState) {
        const sign = this.color === Color.WHITE ? + 1 : -1;
        let result = [];
        /* pawn can move one rank if the square is empty */
        const moveOneFile = Squares.of(square.col, square.row + 1 * sign);
        if (moveOneFile && gameState.getPiece(moveOneFile).color === Color.TRANSLUCENT) {
            result.push(moveOneFile);
            if ((this.color === Color.WHITE && square.row === 1) || ((this.color === Color.BLACK && square.row === 6))) {
                /* pawns can move another rank in the initial move if the square is empty as well */
                const moveTwoFiles = Squares.of(square.col, square.row + 2 * sign);
                if (moveTwoFiles && gameState.getPiece(moveTwoFiles).color === Color.TRANSLUCENT) {
                    result.push(moveTwoFiles);
                }
            }
        }
        /* pawn can capture diagonally */
        const enemy = this.color === Color.WHITE ? Color.BLACK : Color.WHITE;
        const diagonalMoveOne = Squares.of(square.col - 1, square.row + 1 * sign);
        if (diagonalMoveOne && gameState.getPiece(diagonalMoveOne).color === enemy) {
            result.push(diagonalMoveOne);
        }
        const diagonalMoveTwo = Squares.of(square.col + 1, square.row + 1 * sign);
        if (diagonalMoveTwo && gameState.getPiece(diagonalMoveTwo).color === enemy) {
            result.push(diagonalMoveTwo);
        }
        return result;
    }

}

export default Pawn;