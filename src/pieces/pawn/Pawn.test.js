import GameState from "../../gamestate/GameState";
import Pawn from "./Pawn";
import Color from "../Color";

describe('test moves' , () => {

    it('white pawn can move 1 or 2 ranks up in the first move' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(0, 1)).toEqual([{col: 0, row: 2}, {col: 0, row: 3}]);
    });

    it('black pawn can move 1 or 2 ranks down in the first move' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(0, 6)).toEqual([{col: 0, row: 5}, {col: 0, row: 4}]);
    });

    it('white pawn can move 1 rank down in subsequent moves' , () => {
        let gameState = GameState.initialBoard().setPiece(0, 2, new Pawn(Color.WHITE));
        expect(gameState.getAllowedMoves(0, 2)).toEqual([{col: 0, row: 3}]);
    });

    it('black pawn can move 1 rank up in subsequent moves' , () => {
        let gameState = GameState.initialBoard().setPiece(0, 5, new Pawn(Color.BLACk));
        expect(gameState.getAllowedMoves(0, 5)).toEqual([{col: 0, row: 4}]);
    });

});