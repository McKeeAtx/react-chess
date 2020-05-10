import Color from "../Color";
import Piece from "../Piece";

class Rook extends Piece {

    constructor(color) {
        super(color === Color.WHITE ? '\u2656' : '\u265C', color);
    }

}

export default Rook;