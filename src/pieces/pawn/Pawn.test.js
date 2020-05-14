import GameState from "../../gamestate/GameState";
import Pawn from "./Pawn";
import {A1, A2, A3, A4, A5, A6, A7, A8, B2, B3, B4, C3} from "../../common/Square";

describe('pawn' , () => {
    it('pawns don\'t have a letter' , () => {
        expect(Pawn.BLACK.getLetter()).toEqual("");
    });

    it('white pawn at A2 can move to A3 or A4' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(A2)).toEqual([A3, A4]);
    });

    it('black pawn at A7 can move to A6 and A5' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(A7)).toEqual([A6, A5]);
    });

    it('white pawn at A3 can move to A4' , () => {
        let gameState = GameState.initialBoard().setPiece(A3, Pawn.WHITE);
        expect(gameState.getAllowedMoves(A3)).toEqual([A4]);
    });

    it('black pawn at A6 can move to A5' , () => {
        let gameState = GameState.initialBoard().setPiece(A6, Pawn.BLACK);
        expect(gameState.getAllowedMoves(A6)).toEqual([A5]);
    });

    it('white pawn at A8 can\'t move anywhere', () => {
        let gameState = GameState.initialBoard().setPiece(A8, Pawn.WHITE);
        expect(gameState.getAllowedMoves(A8)).toEqual([]);
    });

    it('black pawn at A1 can\'t move anywhere', () => {
        let gameState = GameState.initialBoard().setPiece(A1, Pawn.BLACK);
        expect(gameState.getAllowedMoves(A1)).toEqual([]);
    });

    it('white pawn at A2 can\'t move anywhere if a white piece is A3', () => {
        let gameState = GameState.initialBoard()
            .setPiece(A2, Pawn.WHITE)
            .setPiece(A3, Pawn.WHITE);
        expect(gameState.getAllowedMoves(A2)).toEqual([]);
    });

    it('white pawn at row 1 can\'t move anywhere if a black piece is at row 2', () => {
        let gameState = GameState.initialBoard()
            .setPiece(A2, Pawn.WHITE)
            .setPiece(A3, Pawn.BLACK);
        expect(gameState.getAllowedMoves(A2)).toEqual([]);
    });

    it('black pawn at A7 can\'t move anywhere if a black piece is at A6', () => {
        let gameState = GameState.initialBoard()
            .setPiece(A7, Pawn.BLACK)
            .setPiece(A6, Pawn.BLACK);
        expect(gameState.getAllowedMoves(A7)).toEqual([]);
    });

    it('black pawn at A7 can\'t move anywhere if a white piece is at A6', () => {
        let gameState = GameState.initialBoard()
            .setPiece(A7, Pawn.BLACK)
            .setPiece(A6, Pawn.WHITE);
        expect(gameState.getAllowedMoves(A7)).toEqual([]);
    });

    it('white pawns can\'t capture white pieces', () => {
        let gameState = GameState.emptyBoard()
            .setPiece(A3, Pawn.WHITE)
            .setPiece(B2, Pawn.WHITE)
            .setPiece(C3, Pawn.WHITE);
        expect(gameState.getAllowedMoves(B2)).toEqual([B3, B4]);
    });

    it('white pawns can capture black pieces', () => {
        let gameState = GameState.emptyBoard()
            .setPiece(A3, Pawn.BLACK)
            .setPiece(B2, Pawn.WHITE)
            .setPiece(C3, Pawn.BLACK);
        expect(gameState.getAllowedMoves(B2)).toEqual([B3, B4, A3, C3]);
    });

});