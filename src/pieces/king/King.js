import Color from "../Color";
import Piece from "../Piece";

class King extends Piece {

    constructor(color) {
        super(color === Color.WHITE ? '\u2654' : '\u265A', color);
    }

}

export default King;