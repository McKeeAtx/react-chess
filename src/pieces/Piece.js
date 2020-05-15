import Color from "../common/Color";
import Move from "../common/Move";

class Piece {

    constructor(symbol, color) {
        this.symbol = symbol;
        this.color = color;
    }

    getAllowedSquares(from, gameState, checkForKingAttacked) {
        return this.getAllowedSquaresInternal(from, gameState)
            .filter(to => to !== undefined)
            .filter(to => this.emptyOrEnemy(to, gameState))
            .filter(to => (false === checkForKingAttacked) || (false === this.kingUnderAttack(from, to, gameState)));
    }

    /**
     * Used by rooks, bishops and queens.
     * @param originalSquare
     * @param square
     * @param offsetCol
     * @param offsetRow
     * @param gameState
     * @returns {*[]}
     */
    getAllowedSquaresWithOffset(originalSquare, square, offsetCol, offsetRow, gameState) {
        const newSquare = square.withOffset(offsetCol, offsetRow);
        if (newSquare) {
            if (gameState.getPiece(newSquare).color === Color.TRANSLUCENT) {
                let result = [];
                result.push(newSquare);
                result = result.concat(this.getAllowedSquaresWithOffset(originalSquare, newSquare, offsetCol, offsetRow, gameState));
                return result;
            }
            if (gameState.getPiece(newSquare).color !== gameState.getPiece(originalSquare).color) {
                return [newSquare];
            }
        }
        return [];
    }


    getLetter() {
        return "?";
    }

    getAllowedSquaresInternal(square, gameState) {
        return [];
    }

    emptyOrEnemy(square, gameState) {
        return gameState.getPiece(square).color !== this.color;
    }

    performMove(move, gameState) {
        return gameState
            .setPiece(move.from, gameState.getNone())
            .setPiece(move.to, this);
    }

    kingUnderAttack(from, to, gameState) {
        return gameState.performMove(new Move(from, to)).kingUnderAttack(this.color);
    }
}

export default Piece;