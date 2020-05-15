import Square from "../common/Square";
import Move from "../common/Move";

class Engine  {

    nextMove(gameState) {
        const nextPlauer = gameState.nextPlayer();
        const playersSquares = Square.all().filter(square => gameState.get(square).color == nextPlauer);
        const allowedMoves = playersSquares.flatMap(square => gameState.getAllowedSquares(square).map(allowedSquare => new Move(square, allowedSquare)));
        if (allowedMoves.length > 0) {
            return allowedMoves[Math.floor(Math.random() * allowedMoves.length)];
        } else {
            return undefined;
        }
    }

}

export default Engine;