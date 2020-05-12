import Color from "../pieces/Color";
import Pawn from "../pieces/pawn/Pawn";
import Rook from "../pieces/rook/Rook";
import Knight from "../pieces/knight/Knight";
import Bishop from "../pieces/bishop/Bishop";
import Queen from "../pieces/queen/Queen";
import King from "../pieces/king/King";
import None from "../pieces/none/None";

/**
 * Represent a game (the position of all pieces and all previous clicks and moves)
 * at a particular point in time.
 */
class GameState  {

    constructor() {
        this.pieces = new Array(8).fill(0).map(() => new Array(8).fill(new None()));
        this.clicks = [];
        this.moves = [];
    }

    static emptyBoard() {
        let state = new GameState();
        return state;
    }

    static initialBoard() {
        let state = new GameState();
        for (let col = 0; col < 8; col++) {
            state.pieces[col][1] = new Pawn(Color.WHITE);
            state.pieces[col][6] = new Pawn(Color.BLACK);
        }
        state.pieces[0][0] = new Rook(Color.WHITE);
        state.pieces[7][0] = new Rook(Color.WHITE);
        state.pieces[0][7] = new Rook(Color.BLACK);
        state.pieces[7][7] = new Rook(Color.BLACK);
        state.pieces[1][0] = new Knight(Color.WHITE);
        state.pieces[6][0] = new Knight(Color.WHITE);
        state.pieces[1][7] = new Knight(Color.BLACK);
        state.pieces[6][7] = new Knight(Color.BLACK);
        state.pieces[2][0] = new Bishop(Color.WHITE);
        state.pieces[5][0] = new Bishop(Color.WHITE);
        state.pieces[2][7] = new Bishop(Color.BLACK);
        state.pieces[5][7] = new Bishop(Color.BLACK);
        state.pieces[3][0] = new Queen(Color.WHITE);
        state.pieces[4][0] = new King(Color.WHITE);
        state.pieces[3][7] = new King(Color.BLACK);
        state.pieces[4][7] = new Queen(Color.BLACK);
        return state;
    }

    getPiece(col, row) {
        return this.pieces[col][row];
    }

    setPiece(col, row, piece) {
        this.pieces[col][row] = piece;
        return this;
    }

    nextPlayer() {
        return this.moves.length % 2 === 0 ? Color.WHITE : Color.BLACK;
    }

    squareClicked(col, row) {
        let result = new GameState();
        result.pieces = this.pieces.slice();
        result.clicks = this.clicks.slice();
        result.clicks.push({ col: col, row: row});
        return result;
    }

    isSelected(col, row) {
        const selected = this.getSelectedSquare();
        if (selected) {
            return selected.col === col && selected.row === row;
        }
        return false;
    }


    /**
     * Returns the square that is currently selected.
     *
     * @returns {{col: *, row: *}|undefined}
     */
    getSelectedSquare() {
        if (this.clicks.length !== 0) {
            const lastClick = this.clicks.slice(-1)[0];
            if (this.pieces[lastClick.col][lastClick.row].color === this.nextPlayer()) {
                return {
                    col: lastClick.col,
                    row: lastClick.row
                }
            }
        }
        return undefined;
    }

    /**
     * Returns true if the square at col/row is be highlighted, false otherwise.
     *
     * @param col the square's column
     * @param row the square's row
     * @returns true if the square at col/row is be highlighted, false otherwise
     */
    isHighlighted(col, row) {
        let selected = this.getSelectedSquare();
        if (selected) {
            return this.getAllowedMoves(selected.col, selected.row)
                .filter(e => e.col === col && e.row === row).length > 0;
        }
        return false;
    }

    /**
     * Returns the squares that the piece at col / row can move to.
     *
     * @param col the piece's column
     * @param row the piece's row
     * @returns {{col: *, row: *}[]}
     */
    getAllowedMoves(col, row) {
        return this.pieces[col][row].getAllowedMoves(col, row, this);
    }

}

export default GameState;