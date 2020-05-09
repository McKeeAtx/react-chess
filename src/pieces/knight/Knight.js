import Color from "../Color";
import Piece from "../Piece";

class Bishop extends Piece {

    constructor(color) {
        super(color == Color.WHITE ? '\u2654' : '\u265A', color);
    }

}

export default Bishop;