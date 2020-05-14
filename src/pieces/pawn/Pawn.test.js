import GameState from "../../gamestate/GameState";
import Pawn from "./Pawn";
import {
    A1,
    A2,
    A3,
    A4,
    A5,
    A6,
    A7,
    A8,
    B2,
    B3,
    B4,
    B5,
    B6,
    B7,
    C3,
    C5, C6,
    C7,
    G5,
    G6,
    H2,
    H4,
    H5
} from "../../common/Square";
import None from "../none/None";

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

    it('test black pawn captures white pawn en passant', () => {
        let gameState = GameState.emptyBoard()
            .setPiece(A2, Pawn.WHITE)
            .setPiece(B4, Pawn.BLACK)
            .handleSquareClick(A2)
            .handleSquareClick(A4);
        expect(gameState.getAllowedMoves(B4)).toEqual([B3, A3]);
        expect(gameState.getPiece(A4)).toEqual(Pawn.WHITE);
        gameState = gameState
            .handleSquareClick(B4)
            .handleSquareClick(A3);
        expect(gameState.getPiece(A4)).toEqual(None.INSTANCE);
    });

    it('test white pawn captures black pawn en passant on the column to the left', () => {
        let gameState = GameState.emptyBoard()
            .setPiece(A7, Pawn.BLACK)
            .setPiece(B4, Pawn.WHITE)
            .handleSquareClick(B4)
            .handleSquareClick(B5)
            .handleSquareClick(A7)
            .handleSquareClick(A5);
        expect(gameState.getAllowedMoves(B5)).toEqual([B6, A6]);
        expect(gameState.getPiece(A5)).toEqual(Pawn.BLACK);
        gameState = gameState
            .handleSquareClick(B5)
            .handleSquareClick(A6);
        expect(gameState.getPiece(B5)).toEqual(None.INSTANCE);
    });

    it('test white pawn captures black pawn en passant on the column to the right', () => {
        let gameState = GameState.emptyBoard()
            .setPiece(C7, Pawn.BLACK)
            .setPiece(B4, Pawn.WHITE)
            .handleSquareClick(B4)
            .handleSquareClick(B5)
            .handleSquareClick(C7)
            .handleSquareClick(C5);
        expect(gameState.getAllowedMoves(B5)).toEqual([B6, C6]);
        expect(gameState.getPiece(C5)).toEqual(Pawn.BLACK);
        gameState = gameState
            .handleSquareClick(B5)
            .handleSquareClick(C6);
        expect(gameState.getPiece(C5)).toEqual(None.INSTANCE);
    });


    it('en passant is only available immediately after the initial move of the enemy pawn', () => {
        let gameState = GameState.emptyBoard()
            .setPiece(G5, Pawn.WHITE)
            .setPiece(H5, Pawn.BLACK)
            .setPiece(A2, Pawn.WHITE)
            .setPiece(B2, Pawn.WHITE)
            .setPiece(A5, Pawn.BLACK)
            .setPiece(B4, Pawn.BLACK)
            .handleSquareClick(A2)
            .handleSquareClick(A4)

            // intermediate moves - player loses right to do en passant
            .handleSquareClick(H5)
            .handleSquareClick(H4)
            .handleSquareClick(G5)
            .handleSquareClick(G6);
        expect(gameState.getAllowedMoves(B4)).toEqual([B3]);
    });

});