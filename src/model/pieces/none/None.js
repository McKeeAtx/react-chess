import Color from "../../Color";
import Piece from "../Piece";

class None extends Piece {

    static INSTANCE = new None();

    constructor() {
        super(' ', Color.TRANSLUCENT);
    }

}

export default None;