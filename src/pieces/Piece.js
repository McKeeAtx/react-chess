class Piece {

    constructor(symbol, color) {
        this.symbol = symbol;
        this.color = color;
    }

    getAllowedMoves(col, row, gameState) {
        return this.getAllowedMovesInternal(col, row, gameState)
            .filter(target => this.withinBoard(target.col, target.row))
            .filter(target => this.emptyOrEnemy(target.col, target.row, gameState));
    }

    getAllowedMovesInternal(col, row, gameState) {
        return [];
    }

    withinBoard(col, row) {
        return col >= 0 & col < 8 && row >= 0 && row < 8;
    }

    emptyOrEnemy(col, row, gameState) {
        return gameState.getPiece(col, row).color !== this.color;
    }

}

export default Piece;