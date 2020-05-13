class Piece {

    constructor(symbol, color) {
        this.symbol = symbol;
        this.color = color;
    }

    getAllowedMoves(square, gameState) {
        return this.getAllowedMovesInternal(square, gameState)
            .filter(sq => sq != undefined)
            .filter(sq => this.emptyOrEnemy(sq, gameState));
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