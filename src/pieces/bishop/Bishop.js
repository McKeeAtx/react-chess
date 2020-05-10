import Color from "../Color";
import Piece from "../Piece";

class Bishop extends Piece {

    constructor(color) {
        super(color === Color.WHITE ? '\u2657' : '\u265D', color);
    }

}

export default Bishop;