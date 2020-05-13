import Knight from "./Knight";
import GameState from "../../gamestate/GameState";

describe('knight' , () => {

    it('N denotes a knight' , () => {
        expect(Knight.BLACK.getLetter()).toEqual("N");
    });

    it('white knight on col 1 has two allowed moves' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(1, 0)).toEqual([{col: 2, row: 2}, {col: 0, row: 2}]);
    });

    it('white knight on col 6 has two allowed moves' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(6, 0)).toEqual([{col: 7, row: 2}, {col: 5, row: 2}]);
    });

    it('black knight on col 1 has two allowed moves' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(1, 7)).toEqual([{col: 2, row: 5}, {col: 0, row: 5}]);
    });

    it('black knight on col 6 has two allowed moves' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(6, 7)).toEqual([{col: 7, row: 5}, {col: 5, row: 5}]);
    });

    it('black knight in middle of empty board has 4 moves' , () => {
        let gameState = GameState.emptyBoard().setPiece(4, 4, Knight.BLACK);
        expect(gameState.getAllowedMoves(4, 4)).toEqual([
            {col: 5, row: 6},
            {col: 3, row: 6},
            {col: 5, row: 2},
            {col: 3, row: 2},
            {col: 6, row: 5},
            {col: 2, row: 5},
            {col: 6, row: 3},
            {col: 2, row: 3}
        ]);
    });

});