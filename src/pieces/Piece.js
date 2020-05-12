class Piece {

    constructor(symbol, color) {
        this.symbol = symbol;
        this.color = color;
    }

    getTargetSquares(col, row, pieces) {
        return this.getTargetSquaresInternal(col, row, pieces)
            .filter(target => this.withinBoard(target.col, target.row))
            .filter(target => this.emptyOrEnemy(target.col, target.row, pieces));
    }

    getTargetSquaresInternal(col, row, pieces) {
        return [];
    }

    withinBoard(col, row) {
        return col >= 0 & col < 8 && row >= 0 && row < 8;
    }

    emptyOrEnemy(col, row, pieces) {
        return pieces[col][row].color !== this.color;
    }

}

export default Piece;