import Color from "../pieces/Color";
import Pawn from "../pieces/pawn/Pawn";
import Rook from "../pieces/rook/Rook";
import Knight from "../pieces/knight/Knight";
import Bishop from "../pieces/bishop/Bishop";
import Queen from "../pieces/queen/Queen";
import King from "../pieces/king/King";
import None from "../pieces/none/None";

/**
 * Represent the state (the position of all pieces and all previous clicks) at a particular point in time
 * during a game.
 */
class BoardState  {

    pieces = [];
    clicks = [];

    constructor() {
        this.pieces = new Array(8).fill(0).map(() => new Array(8).fill(new None()));
        this.clicks = [];
    }

    static initial() {
        let snapshot = new BoardState();
        for (let col = 0; col < 8; col++) {
            snapshot.pieces[col][1] = new Pawn(Color.WHITE);
            snapshot.pieces[col][6] = new Pawn(Color.BLACK);
        }
        snapshot.pieces[0][0] = new Rook(Color.WHITE);
        snapshot.pieces[7][0] = new Rook(Color.WHITE);
        snapshot.pieces[0][7] = new Rook(Color.BLACK);
        snapshot.pieces[7][7] = new Rook(Color.BLACK);
        snapshot.pieces[1][0] = new Knight(Color.WHITE);
        snapshot.pieces[6][0] = new Knight(Color.WHITE);
        snapshot.pieces[1][7] = new Knight(Color.BLACK);
        snapshot.pieces[6][7] = new Knight(Color.BLACK);
        snapshot.pieces[2][0] = new Bishop(Color.WHITE);
        snapshot.pieces[5][0] = new Bishop(Color.WHITE);
        snapshot.pieces[2][7] = new Bishop(Color.BLACK);
        snapshot.pieces[5][7] = new Bishop(Color.BLACK);
        snapshot.pieces[3][0] = new Queen(Color.WHITE);
        snapshot.pieces[4][0] = new King(Color.WHITE);
        snapshot.pieces[3][7] = new King(Color.BLACK);
        snapshot.pieces[4][7] = new Queen(Color.BLACK);
        return snapshot;
    }

    onClick(col, row) {
        let result = new BoardState();
        result.pieces = this.pieces.slice();
        result.clicks = this.clicks.slice();
        result.clicks.push({ col: col, row: row});
        return result;
    }

    getData(col, row) {
        return {
            piece: this.pieces[col][row],
            highlighted: this.isHighlighted(col, row)
        };
    }

    isHighlighted(col, row) {
        if (this.clicks.length !== 0) {
            return this.clicks.slice(-1)[0].col === col && this.clicks.slice(-1)[0].row === row;
        }
        return false;
    }
}

export default BoardState;