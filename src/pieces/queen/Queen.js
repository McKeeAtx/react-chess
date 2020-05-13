import Color from "../../common/Color";
import Piece from "../Piece";

class Queen extends Piece {

    constructor(color) {
        super(color === Color.WHITE ? '\u2655' : '\u265B', color);
    }

}

export default Queen;