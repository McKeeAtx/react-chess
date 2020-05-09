import Color from "../Color";
import Piece from "../Piece";

class Knight extends Piece {

    constructor(color) {
        super(color == Color.WHITE ? '\u2658' : '\u265E', color);
    }

}

export default Knight;