import Color from "../../common/Color";
import Piece from "../Piece";
import Move from "../../common/Move";

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
        return []
            .concat(this.getVerticalMoves(square, gameState, sign))
            .concat(this.getDiagonalMoves(square, gameState, sign))
            .concat(this.getEnPassantMoves(square, gameState, sign));
    }

    getVerticalMoves(square, gameState, sign) {
        /* pawn can move one rank if the square is empty */
        let moves = [];
        const moveOneFile = square.withOffset(0 , 1 * sign);
        if (moveOneFile && gameState.getPiece(moveOneFile).color === Color.TRANSLUCENT) {
            moves.push(moveOneFile);
            if ((this.color === Color.WHITE && square.row === 1) || ((this.color === Color.BLACK && square.row === 6))) {
                /* pawns can move another rank in the initial move if the square is empty as well */
                const moveTwoFiles = square.withOffset(0, 2 * sign);
                if (moveTwoFiles && gameState.getPiece(moveTwoFiles).color === Color.TRANSLUCENT) {
                    moves.push(moveTwoFiles);
                }
            }
        }
        return moves;
    }

    getDiagonalMoves(square, gameState, sign) {
        let moves = [];
        /* pawn can capture diagonally */
        const enemy = this.color === Color.WHITE ? Color.BLACK : Color.WHITE;
        const diagonalMoveOne = square.withOffset(- 1, 1 * sign);
        if (diagonalMoveOne && gameState.getPiece(diagonalMoveOne).color === enemy) {
            moves.push(diagonalMoveOne);
        }
        const diagonalMoveTwo = square.withOffset(+ 1, 1 * sign);
        if (diagonalMoveTwo && gameState.getPiece(diagonalMoveTwo).color === enemy) {
            moves.push(diagonalMoveTwo);
        }
        return moves;
    }

    getEnPassantMoves(square, gameState, sign) {
        let moves = [];
        const enemy = this.color === Color.WHITE ? Pawn.BLACK : Pawn.WHITE;
        [-1, +1].forEach( colOffset => {
            if (gameState.getPiece(square.withOffset(colOffset, 0)) === enemy) {
                if (gameState.moves.length > 0) {
                    const lastMove = gameState.moves[gameState.moves.length - 1];
                    if (lastMove.from == square.withOffset(colOffset, +2 * sign) &&
                        lastMove.to == square.withOffset(colOffset, 0)) {
                        moves.push(square.withOffset(colOffset, +sign));
                    }
                }
            }
        });
        return moves;
    }

    performMove(move, pieces, pieceNone) {
        if (move.from.col !== move.to.col && pieces[move.to.col][move.to.row] === pieceNone) {
            // en passant
            const sign = this.color === Color.WHITE ? + 1 : -1;
            pieces[move.to.col][move.to.row - sign] = pieceNone;
        }
        pieces[move.from.col][move.from.row] = pieceNone;
        pieces[move.to.col][move.to.row] = this;
    }

}

export default Pawn;