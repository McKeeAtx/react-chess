import Color from "../../common/Color";
import Piece from "../Piece";
import Squares from "../../common/Squares";

class Knight extends Piece {

    static BLACK = new Knight(Color.BLACK);
    static WHITE = new Knight(Color.WHITE);

    constructor(color) {
        super(color === Color.WHITE ? '\u2658' : '\u265E', color);
    }

    getLetter() {
        return "N";
    }

    getAllowedMovesInternal(square, gameState) {
        return [
            Squares.of(square.col + 1, square.row + 2),
            Squares.of(square.col - 1, square.row + 2),
            Squares.of(square.col + 1, square.row - 2),
            Squares.of(square.col - 1, square.row - 2),
            Squares.of(square.col + 2, square.row + 1),
            Squares.of(square.col - 2, square.row + 1),
            Squares.of(square.col + 2, square.row - 1),
            Squares.of(square.col - 2, square.row - 1)
        ];
    }

}

export default Knight;