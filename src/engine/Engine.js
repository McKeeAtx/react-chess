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

    playTillLevel(gameState, depth) {
        if (depth === 0) {
            return 0;
        }
        const nextPlayer = gameState.nextPlayer();
        const playersSquares = Square.all().filter(square => gameState.get(square).color == nextPlayer);
        const allowedMoves = playersSquares.flatMap(square => gameState.getAllowedSquares(square).map(allowedSquare => new Move(square, allowedSquare)));
        let count = allowedMoves.length;
        allowedMoves.forEach(move => count += this.playTillLevel(this.evaluate(move), depth - 1));
        return count;
    }

    evaluate(move) {
        let evaluation = new Evaluator().evaluate(move);
        return move;
    }

}

export default Engine;