import Square from "../model/Square";
import Move from "../model/Move";
import Evaluator from "../evaluator/Evaluator";

class Engine  {

    nextMove(gameState) {
        const nextPlayer = gameState.nextPlayer();
        const playersSquares = Square.all().filter(square => gameState.get(square).color == nextPlayer);
        const allowedMoves = playersSquares.flatMap(square => gameState.getAllowedSquares(square).map(allowedSquare => new Move(square, allowedSquare)));
        if (allowedMoves.length > 0) {
            return allowedMoves[Math.floor(Math.random() * allowedMoves.length)];
        } else {
            return undefined;
        }
    }

}

export default Engine;