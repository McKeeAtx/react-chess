import Pawn from "../pieces/pawn/Pawn";
import Rook from "../pieces/rook/Rook";
import Knight from "../pieces/knight/Knight";
import Bishop from "../pieces/bishop/Bishop";
import Queen from "../pieces/queen/Queen";
import King from "../pieces/king/King";
import None from "../pieces/none/None";
import Square, {D4} from "../common/Square";
import Squares, {
    A1,
    A2,
    A7,
    A8,
    B1,
    B2,
    B7,
    B8,
    C1,
    C2,
    C7,
    C8,
    D1,
    D2,
    D7,
    D8,
    E1,
    E2,
    E7,
    E8,
    F1,
    F2,
    F7,
    F8,
    G1,
    G2,
    G7,
    G8,
    H1,
    H2,
    H7,
    H8
} from "../common/Square";
import Move from "../common/Move";
import Color from "../common/Color";

/**
 * Represent the state of a game (the position of all pieces and all previous clicks and moves)
 * at a particular point in time.
 */
class GameState  {

    constructor(pieces, clicks, moves) {
        this.pieces = pieces.map(row => row.slice());
        this.clicks = clicks.slice();
        this.moves = moves.slice();
        this.selectedSquare = this.computeSelectedSquare();
        this.highlightedSquares = this.selectedSquare ? this.getAllowedSquares(this.selectedSquare) : [];
    }

    /**
     * Creates a {GameState} with an empty board.
     *
     * @returns {GameState}
     */
    static emptyBoard() {
        return new GameState(
            new Array(8).fill(0).map(() => new Array(8).fill(None.INSTANCE)),
            [],
            []
        );
    }

    /**
     * Creates a {GameState} with every piece at its starting position.
     *
     * @returns {GameState}
     */
    static initialBoard() {
        return this.emptyBoard()
            .set(A1, Rook.WHITE)
            .set(B1, Knight.WHITE)
            .set(C1, Bishop.WHITE)
            .set(D1, Queen.WHITE)
            .set(E1, King.WHITE)
            .set(F1, Bishop.WHITE)
            .set(G1, Knight.WHITE)
            .set(H1, Rook.WHITE)
            .set(A2, Pawn.WHITE)
            .set(B2, Pawn.WHITE)
            .set(C2, Pawn.WHITE)
            .set(D2, Pawn.WHITE)
            .set(E2, Pawn.WHITE)
            .set(F2, Pawn.WHITE)
            .set(G2, Pawn.WHITE)
            .set(H2, Pawn.WHITE)
            .set(A7, Pawn.BLACK)
            .set(B7, Pawn.BLACK)
            .set(C7, Pawn.BLACK)
            .set(D7, Pawn.BLACK)
            .set(E7, Pawn.BLACK)
            .set(F7, Pawn.BLACK)
            .set(G7, Pawn.BLACK)
            .set(H7, Pawn.BLACK)
            .set(A8, Rook.BLACK)
            .set(B8, Knight.BLACK)
            .set(C8, Bishop.BLACK)
            .set(D8, King.BLACK)
            .set(E8, Queen.BLACK)
            .set(F8, Bishop.BLACK)
            .set(G8, Knight.BLACK)
            .set(H8, Rook.BLACK);
    }

    /**
     * Returns the piece at square {square}.
     *
     * @param square the piece's square
     * @returns {Piece}
     */
    get(square) {
        if (square === undefined) {
            return undefined;
        }
        return this.pieces[square.col][square.row];
    }

    /**
     * Creates a new {GameState} from this instance by assigning {piece} to {square}.
     *
     * @param square
     * @param piece
     * @returns {GameState}
     */
    set(square, piece) {
        const newPieces = this.pieces.map(row => row.slice());
        newPieces[square.col][square.row] = piece;
        return new GameState(newPieces, this.clicks, this.moves);
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
        if (this.selectedSquare && this.getAllowedSquares(this.selectedSquare)
            .find(sq => sq === square) !== undefined) {
            return this
                .performMove(new Move(this.selectedSquare, square))
                .storeClick(square);
        } else {
            return this.storeClick(square)
        }
    }

    storeClick(square) {
        return new GameState(this.pieces, this.clicks.slice().concat([square]), this.moves);
    }

    storeMove(move) {
        return new GameState(this.pieces, this.clicks, this.moves.slice().concat([move]));
    }

    performMove(move) {
        return this.get(move.from).performMove(move, this).storeMove(move);
    }


    /**
     * Returns true if the {square} is selected, false otherwise.
     *
     * @param square the square to check
     * @returns true if the {square} is selected, false otherwise
     */
    isSelected(square) {
        return this.selectedSquare === square;
    }

    /**
     * Returns true if the square at {col} / {row} is highlighted, false otherwise.
     *
     * @param col the square's column
     * @param row the square's row
     * @returns true if the square at {col} / {row} is highlighted, false otherwise
     */
    isHighlighted(square) {
        return this.highlightedSquares.find(highlighted => highlighted === square) !== undefined;
    }

    getNone() {
        return None.INSTANCE;
    }

    isCheck(color) {
        const king = color === Color.WHITE ? King.WHITE : King.BLACK;
        const enemyColor = color === Color.WHITE ? Color.BLACK : Color.WHITE;
        const kingSquare = Squares.all().find(square => this.get(square) === king);
        if ( ! kingSquare ) {
            return false;
        }
        const enemyPieces = Squares.all().filter(square => this.get(square).color === enemyColor)
        return enemyPieces.flatMap(enemy => this.getAttackedSquares(enemy))
            .find(attackedByEnemy => attackedByEnemy === kingSquare) !== undefined;
    }

    computeSelectedSquare() {
        if (this.clicks.length !== 0) {
            const lastClick = this.clicks.slice(-1)[0];
            if (this.pieces[lastClick.col][lastClick.row].color === this.nextPlayer()) {
                return Square.of(lastClick.col, lastClick.row);
            }
        }
        return undefined;
    }

    getAttackedSquares(square) {
        return this.get(square).getAttackedSquares(square, this);
    }

    getAllowedSquares(square) {
        return this.get(square).getAllowedSquares(square, this);
    }

}

export default GameState;