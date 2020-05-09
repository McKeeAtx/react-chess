import Color from "../Color";
import Piece from "../Piece";

class Bishop extends Piece {

    constructor(color) {
        super(color == Color.BLACK ? '\u265D' : '\u2657', color);
    }

}

export default Bishop;