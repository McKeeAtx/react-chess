import Pawn from "../pieces/pawn/Pawn";
import Rook from "../pieces/rook/Rook";
import Knight from "../pieces/knight/Knight";
import Bishop from "../pieces/bishop/Bishop";
import Queen from "../pieces/queen/Queen";
import King from "../pieces/king/King";
import None from "../pieces/none/None";
import Square from "../common/Square";
import Move from "../common/Move";
import Squares from "../common/Square";
import Color from "../common/Color";

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
        state.pieces[0][0] = Rook.WHITE;
        state.pieces[7][0] = Rook.WHITE;
        state.pieces[0][7] = Rook.BLACK;
        state.pieces[7][7] = Rook.BLACK;
        state.pieces[1][0] = Knight.WHITE;
        state.pieces[6][0] = Knight.WHITE;
        state.pieces[1][7] = Knight.BLACK;
        state.pieces[6][7] = Knight.BLACK;
        state.pieces[2][0] = Bishop.WHITE;
        state.pieces[5][0] = Bishop.WHITE;
        state.pieces[2][7] = Bishop.BLACK;
        state.pieces[5][7] = Bishop.BLACK;
        state.pieces[3][0] = Queen.WHITE;
        state.pieces[4][0] = King.WHITE;
        state.pieces[3][7] = King.BLACK;
        state.pieces[4][7] = Queen.BLACK;
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

    copy() {
        let result = new GameState();
        result.pieces = this.pieces.map(row => row.slice());
        result.clicks = this.clicks.slice();
        result.moves = this.moves.slice();
        return result;
    }

    /**
     * Creates a new {GameState} from this instance by assigning {piece} to  {square}.
     *
     * @param square
     * @param piece
     * @returns {GameState}
     */
    setPiece(square, piece) {
        let result = this.copy();
        result.pieces[square.col][square.row] = piece;
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
        if (selectedSquare && this.getAllowedSquares(selectedSquare).filter(sq => sq === square).length > 0) {
            let result = this.performMove(new Move(selectedSquare, square));
            result.clicks.push(square)
            return result;
        } else {
            let result = this.copy();
            result.clicks.push(square);
            return result;
        }
    }

    performMove(move) {
        let result = this.copy();
        const piece = result.pieces[move.from.col][move.from.row];
        piece.performMove(move, result);
        result.moves.push(move);
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
                return Square.of(lastClick.col, lastClick.row);
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
            return this.getAllowedSquares(selected)
                .filter(sq => sq === square).length > 0;
        }
        return false;
    }

    /**
     * Returns the squares that the piece at {square} can move to.
     *
     * @param square
     * @returns {Square[]}
     */
    _getAllowedSquares(square, checkForKingAttacked) {
        return this.pieces[square.col][square.row].getAllowedSquares(square, this, checkForKingAttacked);
    }

    getAllowedSquares(square) {
        return this._getAllowedSquares(square, true);
    }


    getNone() {
        return None.INSTANCE;
    }

    kingUnderAttack(color) {
        const king = color === Color.WHITE ? King.WHITE : King.BLACK;
        const enemyColor = color === Color.WHITE ? Color.BLACK : Color.WHITE;
        const kingSquare = Squares.all().find(square => this.getPiece(square) === king);
        if ( ! kingSquare ) {
            return false;
        }
        const enemyPieces = Squares.all().filter(square => this.getPiece(square).color === enemyColor)
        const attackingEnemy = enemyPieces.flatMap(square => this._getAllowedSquares(square, false)).find(square => square === kingSquare)
        return attackingEnemy !== undefined;
    }

}

export default GameState;