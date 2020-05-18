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
} from "../../Square";
import None from "../none/None";

describe('pawn' , () => {
    it('pawns don\'t have a letter' , () => {
        expect(Pawn.BLACK.getLetter()).toEqual("");
    });

    it('white pawn at A2 can move to A3 or A4' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedSquares(A2)).toEqual([A3, A4]);
    });

    it('black pawn at A7 can move to A6 and A5' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedSquares(A7)).toEqual([A6, A5]);
    });

    it('white pawn at A3 can move to A4' , () => {
        let gameState = GameState.initialBoard().set(A3, Pawn.WHITE);
        expect(gameState.getAllowedSquares(A3)).toEqual([A4]);
    });

    it('black pawn at A6 can move to A5' , () => {
        let gameState = GameState.initialBoard().set(A6, Pawn.BLACK);
        expect(gameState.getAllowedSquares(A6)).toEqual([A5]);
    });

    it('white pawn at A8 can\'t move anywhere', () => {
        let gameState = GameState.initialBoard().set(A8, Pawn.WHITE);
        expect(gameState.getAllowedSquares(A8)).toEqual([]);
    });

    it('black pawn at A1 can\'t move anywhere', () => {
        let gameState = GameState.initialBoard().set(A1, Pawn.BLACK);
        expect(gameState.getAllowedSquares(A1)).toEqual([]);
    });

    it('white pawn at A2 can\'t move anywhere if a white piece is A3', () => {
        let gameState = GameState.initialBoard()
            .set(A2, Pawn.WHITE)
            .set(A3, Pawn.WHITE);
        expect(gameState.getAllowedSquares(A2)).toEqual([]);
    });

    it('white pawn at row 1 can\'t move anywhere if a black piece is at row 2', () => {
        let gameState = GameState.initialBoard()
            .set(A2, Pawn.WHITE)
            .set(A3, Pawn.BLACK);
        expect(gameState.getAllowedSquares(A2)).toEqual([]);
    });

    it('black pawn at A7 can\'t move anywhere if a black piece is at A6', () => {
        let gameState = GameState.initialBoard()
            .set(A7, Pawn.BLACK)
            .set(A6, Pawn.BLACK);
        expect(gameState.getAllowedSquares(A7)).toEqual([]);
    });

    it('black pawn at A7 can\'t move anywhere if a white piece is at A6', () => {
        let gameState = GameState.initialBoard()
            .set(A7, Pawn.BLACK)
            .set(A6, Pawn.WHITE);
        expect(gameState.getAllowedSquares(A7)).toEqual([]);
    });

    it('white pawns can\'t capture white pieces', () => {
        let gameState = GameState.emptyBoard()
            .set(A3, Pawn.WHITE)
            .set(B2, Pawn.WHITE)
            .set(C3, Pawn.WHITE);
        expect(gameState.getAllowedSquares(B2)).toEqual([B3, B4]);
    });

    it('white pawns can capture black pieces', () => {
        let gameState = GameState.emptyBoard()
            .set(A3, Pawn.BLACK)
            .set(B2, Pawn.WHITE)
            .set(C3, Pawn.BLACK);
        expect(gameState.getAllowedSquares(B2)).toEqual([B3, B4, A3, C3]);
    });

    it('test black pawn captures white pawn en passant', () => {
        let gameState = GameState.emptyBoard()
            .set(A2, Pawn.WHITE)
            .set(B4, Pawn.BLACK)
            .handleSquareClick(A2)
            .handleSquareClick(A4);
        expect(gameState.getAllowedSquares(B4)).toEqual([B3, A3]);
        expect(gameState.get(A4)).toEqual(Pawn.WHITE);
        gameState = gameState
            .handleSquareClick(B4)
            .handleSquareClick(A3);
        expect(gameState.get(A4)).toEqual(None.INSTANCE);
    });

    it('test white pawn captures black pawn en passant on the column to the left', () => {
        let gameState = GameState.emptyBoard()
            .set(A7, Pawn.BLACK)
            .set(B4, Pawn.WHITE)
            .handleSquareClick(B4)
            .handleSquareClick(B5)
            .handleSquareClick(A7)
            .handleSquareClick(A5);
        expect(gameState.getAllowedSquares(B5)).toEqual([B6, A6]);
        expect(gameState.get(A5)).toEqual(Pawn.BLACK);
        gameState = gameState
            .handleSquareClick(B5)
            .handleSquareClick(A6);
        expect(gameState.get(B5)).toEqual(None.INSTANCE);
    });

    it('test white pawn captures black pawn en passant on the column to the right', () => {
        let gameState = GameState.emptyBoard()
            .set(C7, Pawn.BLACK)
            .set(B4, Pawn.WHITE)
            .handleSquareClick(B4)
            .handleSquareClick(B5)
            .handleSquareClick(C7)
            .handleSquareClick(C5);
        expect(gameState.getAllowedSquares(B5)).toEqual([B6, C6]);
        expect(gameState.get(C5)).toEqual(Pawn.BLACK);
        gameState = gameState
            .handleSquareClick(B5)
            .handleSquareClick(C6);
        expect(gameState.get(C5)).toEqual(None.INSTANCE);
    });


    it('en passant is only available immediately after the initial move of the enemy pawn', () => {
        let gameState = GameState.emptyBoard()
            .set(G5, Pawn.WHITE)
            .set(H5, Pawn.BLACK)
            .set(A2, Pawn.WHITE)
            .set(B2, Pawn.WHITE)
            .set(A5, Pawn.BLACK)
            .set(B4, Pawn.BLACK)
            .handleSquareClick(A2)
            .handleSquareClick(A4)

            // intermediate moves - player loses right to do en passant
            .handleSquareClick(H5)
            .handleSquareClick(H4)
            .handleSquareClick(G5)
            .handleSquareClick(G6);
        expect(gameState.getAllowedSquares(B4)).toEqual([B3]);
    });

});