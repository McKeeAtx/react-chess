import Color from "../Color";
import Piece from "../Piece";

class Pawn extends Piece {

    constructor(color) {
        super(color === Color.WHITE ? '\u2659' : '\u265F', color);
    }

}

export default Pawn;