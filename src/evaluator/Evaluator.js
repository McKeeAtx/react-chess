import Square from "../model/Square";
import Move from "../model/Move";
import Color from "../model/Color";

class Evaluator {

    evaluate(gameState) {
        let whiteMaterial =
            Square.all().map(square => gameState.get(square))
                .filter(piece => piece.color === Color.WHITE)
                .reduce((piece, value) => value += piece.getValue(), 0);
        let blackMaterial =
            Square.all().map(square => gameState.get(square))
                .filter(piece => piece.color === Color.WHITE)
                .reduce((piece, value) => value += piece.getValue(), 0);
        return whiteMaterial - blackMaterial;
    }
}


export default Evaluator;