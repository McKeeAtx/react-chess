import Color from "../../common/Color";
import Piece from "../Piece";

class None extends Piece {

    constructor() {
        super(' ', Color.TRANSLUCENT);
    }

}

export default None;