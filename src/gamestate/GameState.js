import Pawn from "../pieces/pawn/Pawn";
import Rook from "../pieces/rook/Rook";
import Knight from "../pieces/knight/Knight";
import Bishop from "../pieces/bishop/Bishop";
import Queen from "../pieces/queen/Queen";
import King from "../pieces/king/King";
import None from "../pieces/none/None";
import Square from "../common/Square";
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
    }

    /**
     * Creates {GameState} with an empty board.
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
     * Creates {GameState} with every piece at its starting position.
     *
     * @returns {GameState}
     */
    static initialBoard() {
        return this.emptyBoard()
            .setPiece(A1, Rook.WHITE)
            .setPiece(B1, Knight.WHITE)
            .setPiece(C1, Bishop.WHITE)
            .setPiece(D1, Queen.WHITE)
            .setPiece(E1, King.WHITE)
            .setPiece(F1, Bishop.WHITE)
            .setPiece(G1, Knight.WHITE)
            .setPiece(H1, Rook.WHITE)
            .setPiece(A2, Pawn.WHITE)
            .setPiece(B2, Pawn.WHITE)
            .setPiece(C2, Pawn.WHITE)
            .setPiece(D2, Pawn.WHITE)
            .setPiece(E2, Pawn.WHITE)
            .setPiece(F2, Pawn.WHITE)
            .setPiece(G2, Pawn.WHITE)
            .setPiece(H2, Pawn.WHITE)
            .setPiece(A7, Pawn.BLACK)
            .setPiece(B7, Pawn.BLACK)
            .setPiece(C7, Pawn.BLACK)
            .setPiece(D7, Pawn.BLACK)
            .setPiece(E7, Pawn.BLACK)
            .setPiece(F7, Pawn.BLACK)
            .setPiece(G7, Pawn.BLACK)
            .setPiece(H7, Pawn.BLACK)
            .setPiece(A8, Rook.BLACK)
            .setPiece(B8, Knight.BLACK)
            .setPiece(C8, Bishop.BLACK)
            .setPiece(D8, King.BLACK)
            .setPiece(E8, Queen.BLACK)
            .setPiece(F8, Bishop.BLACK)
            .setPiece(G8, Knight.BLACK)
            .setPiece(H8, Rook.BLACK);
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
        return new GameState(this.pieces, this.clicks, this.moves);
    }

    /**
     * Creates a new {GameState} from this instance by assigning {piece} to  {square}.
     *
     * @param square
     * @param piece
     * @returns {GameState}
     */
    setPiece(square, piece) {
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
        if (this.selectedSquare && this.getAllowedSquares(this.selectedSquare).filter(sq => sq === square).length > 0) {
            return this
                .performMove(new Move(this.selectedSquare, square))
                .storeClick(square);
        } else {
            return this.storeClick(square)
        }
    }

    storeClick(square) {
        const newClicks = this.clicks.slice();
        newClicks.push(square);
        return new GameState(this.pieces, newClicks, this.moves);
    }

    storeMove(move) {
        const newMoves = this.moves.slice();
        newMoves.push(move);
        return new GameState(this.pieces, this.clicks, newMoves);
    }

    performMove(move) {
        return this.getPiece(move.from).performMove(move, this).storeMove(move);
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
        let selected = this.selectedSquare;
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

    computeSelectedSquare() {
        if (this.clicks.length !== 0) {
            const lastClick = this.clicks.slice(-1)[0];
            if (this.pieces[lastClick.col][lastClick.row].color === this.nextPlayer()) {
                return Square.of(lastClick.col, lastClick.row);
            }
        }
        return undefined;
    }
}

export default GameState;