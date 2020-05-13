import Color from "../common/Color";
import Pawn from "../pieces/pawn/Pawn";
import Rook from "../pieces/rook/Rook";
import Knight from "../pieces/knight/Knight";
import Bishop from "../pieces/bishop/Bishop";
import Queen from "../pieces/queen/Queen";
import King from "../pieces/king/King";
import None from "../pieces/none/None";
import Squares from "../common/Squares";

/**
 * Represent the state of a game (the position of all pieces and all previous clicks and moves)
 * at a particular point in time.
 */
class GameState  {

    constructor() {
        this.pieces = new Array(8).fill(0).map(() => new Array(8).fill(None.INSTANCE));
        this.clicks = [];
        this.moves = [];
    }

    /**
     * Creates {GameState} with an empty board.
     *
     * @returns {GameState}
     */
    static emptyBoard() {
        let state = new GameState();
        return state;
    }

    /**
     * Creates {GameState} with every piece at its starting position.
     *
     * @returns {GameState}
     */
    static initialBoard() {
        let state = new GameState();
        for (let col = 0; col < 8; col++) {
            state.pieces[col][1] = Pawn.WHITE;
            state.pieces[col][6] = Pawn.BLACK;
        }
        state.pieces[0][0] = new Rook(Color.WHITE);
        state.pieces[7][0] = new Rook(Color.WHITE);
        state.pieces[0][7] = new Rook(Color.BLACK);
        state.pieces[7][7] = new Rook(Color.BLACK);
        state.pieces[1][0] = Knight.WHITE;
        state.pieces[6][0] = Knight.WHITE;
        state.pieces[1][7] = Knight.BLACK;
        state.pieces[6][7] = Knight.BLACK;
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

    /**
     * Returns the piece at square {square}.
     *
     * @param square the piece's square
     * @returns {Piece}
     */
    getPiece(square) {
        if (square === undefined) {
            return undefined;
        }
        return this.pieces[square.col][square.row];
    }

    /**
     * Creates a new {GameState} from this instance by assigning {piece} to  {square}.
     *
     * @param square
     * @param piece
     * @returns {GameState}
     */
    setPiece(square, piece) {
        let result = new GameState();
        result.pieces = this.pieces.map(row => row.slice());
        result.pieces[square.col][square.row] = piece;
        result.clicks = this.clicks.slice();
        result.moves = this.moves.slice();
        return result;
    }

    /**
     * Returns the color of the next player.
     *
     * @returns {string}
     */
    nextPlayer() {
        return this.moves.length % 2 === 0 ? Color.WHITE : Color.BLACK;
    }

    handleSquareClick(square) {
        let selectedSquare = this.getSelectedSquare();
        let result = new GameState();
        result.pieces = this.pieces.map(row => row.slice());
        result.clicks = this.clicks.slice();
        result.moves = this.moves.slice();
        result.clicks.push(square);
        if (selectedSquare && this.getAllowedMoves(selectedSquare).filter(sq => sq === square).length > 0) {
            const piece = result.pieces[selectedSquare.col][selectedSquare.row];
            result.pieces[selectedSquare.col][selectedSquare.row] = None.INSTANCE;
            result.pieces[square.col][square.row] = piece;
            result.moves.push(square);
        }
        return result;
    }

    /**
     * Returns true if the {square} is selected, false otherwise.
     *
     * @param square the square to check
     * @returns true if the {square} is selected, false otherwise
     */
    isSelected(square) {
        const selected = this.getSelectedSquare();
        if (selected) {
            return selected.col === square.col && selected.row === square.row;
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
                return Squares.of(lastClick.col, lastClick.row);
            }
        }
        return undefined;
    }

    /**
     * Returns true if the square at {col} / {row} is highlighted, false otherwise.
     *
     * @param col the square's column
     * @param row the square's row
     * @returns true if the square at {col} / {row} is highlighted, false otherwise
     */
    isHighlighted(square) {
        let selected = this.getSelectedSquare();
        if (selected) {
            return this.getAllowedMoves(selected)
                .filter(sq => sq === square).length > 0;
        }
        return false;
    }

    /**
     * Returns the squares that the piece at {square} can move to.
     *
     * @param square
     * @returns {Squares[]}
     */
    getAllowedMoves(square) {
        return this.pieces[square.col][square.row].getAllowedMoves(square, this);
    }

}

export default GameState;