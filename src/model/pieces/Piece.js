import Move from "../Move";

/**
 * Superclass for all pieces (e.g. pawns, kings, etc.).
 */
class Piece {

    constructor(symbol, color) {
        this.symbol = symbol;
        this.color = color;
    }

    /**
     * Returns all squares that are attacked by this piece.
     *
     * @param square the piece's square
     * @param gameState the {GameState}
     * @returns {Square[]}
     */
    getAttackedSquares(square, gameState) {
        return this.getAttackedSquaresInternal(square, gameState)
            .filter(target => target !== undefined)
            .filter(target => gameState.get(target).color !== this.color);
    }

    /**
     * Returns all squares this piece can move to.
     *
     * @param square the piece's square
     * @param gameState the state of the game
     * @returns {Square[]}
     */
    getAllowedSquares(square, gameState) {
        return this.getAttackedSquares(square, gameState)
            .filter(target => false === gameState.performMove(new Move(square, target)).isCheck(this.color));
    }

    /**
     * Pieces perform the actual move to make {GameState} agnostic of piece-specific moves
     * like en passant and casteling.
     *
     * @param move the move that should be performed
     * @param gameState the state of the game before the move
     * @returns {GameState}
     */
    performMove(move, gameState) {
        return gameState
            .set(move.from, gameState.getNone())
            .set(move.to, this);
    }

    /**
     * Allows to rule out pieces quickly before doing the comprehensive analysis which squares
     * are attacked.
     */
    canAttackOnEmptyBoard(square, target) {
        return true;
    }

    /**
     * Common boilerplate that rooks, bishops and queens use to implement getAttackedSquaresInternal.
     */
    getAttackedSquaresWithOffset(originalSquare, square, offsetCol, offsetRow, gameState) {
        const newSquare = square.withOffset(offsetCol, offsetRow);
        if (newSquare) {
            if (gameState.get(newSquare) === gameState.getNone()) {
                return [newSquare, ...this.getAttackedSquaresWithOffset(originalSquare, newSquare, offsetCol, offsetRow, gameState)];
            }
            if (gameState.get(newSquare).color !== gameState.get(originalSquare).color) {
                return [newSquare];
            }
        }
        return [];
    }

}

export default Piece;