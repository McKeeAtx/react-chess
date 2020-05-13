import GameState from "../../gamestate/GameState";
import Pawn from "./Pawn";

describe('pawn' , () => {
    it('pawns don\'t have a letter' , () => {
        expect(Pawn.BLACK.getLetter()).toEqual("");
    });

    it('white pawn can move 1 or 2 ranks up in the first move' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(0, 1)).toEqual([{col: 0, row: 2}, {col: 0, row: 3}]);
    });

    it('black pawn can move 1 or 2 ranks down in the first move' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(0, 6)).toEqual([{col: 0, row: 5}, {col: 0, row: 4}]);
    });

    it('white pawn can move 1 rank down in subsequent moves' , () => {
        let gameState = GameState.initialBoard().setPiece(0, 2, Pawn.WHITE);
        expect(gameState.getAllowedMoves(0, 2)).toEqual([{col: 0, row: 3}]);
    });

    it('black pawn can move 1 rank up in subsequent moves' , () => {
        let gameState = GameState.initialBoard().setPiece(0, 5, Pawn.BLACK);
        expect(gameState.getAllowedMoves(0, 5)).toEqual([{col: 0, row: 4}]);
    });

    it('white pawn at row 7 can\'t move anywhere', () => {
        let gameState = GameState.initialBoard().setPiece(0, 7, Pawn.WHITE);
        expect(gameState.getAllowedMoves(0, 2)).toEqual([]);
    });

    it('black pawn at row 0 can\'t move anywhere', () => {
        let gameState = GameState.initialBoard().setPiece(0, 0, Pawn.BLACK);
        expect(gameState.getAllowedMoves(0, 2)).toEqual([]);
    });

    it('white pawn at row 1 can\'t move anywhere if a white piece is at row 2', () => {
        let gameState = GameState.initialBoard()
            .setPiece(0, 1, Pawn.WHITE)
            .setPiece(0, 2, Pawn.WHITE);
        expect(gameState.getAllowedMoves(0, 1)).toEqual([]);
    });

    it('white pawn at row 1 can\'t move anywhere if a black piece is at row 2', () => {
        let gameState = GameState.initialBoard()
            .setPiece(0, 1, Pawn.WHITE)
            .setPiece(0, 2, Pawn.BLACK);
        expect(gameState.getAllowedMoves(0, 1)).toEqual([]);
    });

    it('black pawn at row 6 can\'t move anywhere if a black piece is at row 5', () => {
        let gameState = GameState.initialBoard()
            .setPiece(0, 6, Pawn.BLACK)
            .setPiece(0, 5, Pawn.BLACK);
        expect(gameState.getAllowedMoves(0, 6)).toEqual([]);
    });

    it('black pawn at row 6 can\'t move anywhere if a white piece is at row 5', () => {
        let gameState = GameState.initialBoard()
            .setPiece(0, 6, Pawn.BLACK)
            .setPiece(0, 5, Pawn.WHITE);
        expect(gameState.getAllowedMoves(0, 6)).toEqual([]);
    });

    it('white pawns can\'t capture white pieces', () => {
        let gameState = GameState.emptyBoard()
            .setPiece(0, 2, Pawn.WHITE)
            .setPiece(1, 1, Pawn.WHITE)
            .setPiece(2, 2, Pawn.WHITE);
        expect(gameState.getAllowedMoves(1, 1)).toEqual([{col: 1, row: 2}, {col: 1, row: 3}]);
    });

    it('white pawns can capture black pieces', () => {
        let gameState = GameState.emptyBoard()
            .setPiece(0, 2, Pawn.BLACK)
            .setPiece(1, 1, Pawn.WHITE)
            .setPiece(2, 2, Pawn.BLACK);
        expect(gameState.getAllowedMoves(1, 1)).toEqual([{col: 1, row: 2}, {col: 1, row: 3}, {col: 0, row: 2}, {col: 2, row: 2}]);
    });

});