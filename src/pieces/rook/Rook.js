import Color from "../Color";
import Piece from "../Piece";

class Bishop extends Piece {

    constructor(color) {
        super(color == Color.WHITE ? '\u2655' : '\u265B', color);
    }

}

export default Bishop;