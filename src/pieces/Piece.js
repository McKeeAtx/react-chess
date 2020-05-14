import Color from "../common/Color";

class Piece {

    constructor(symbol, color) {
        this.symbol = symbol;
        this.color = color;
    }

    getAllowedMoves(square, gameState) {
        return this.getAllowedMovesInternal(square, gameState)
            .filter(sq => sq !== undefined)
            .filter(sq => this.emptyOrEnemy(sq, gameState));
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


    getLetter() {
        return "?";
    }

    getAllowedMovesInternal(square, gameState) {
        return [];
    }

    emptyOrEnemy(square, gameState) {
        return gameState.getPiece(square).color !== this.color;
    }

}

export default Piece;