import GameState from "./GameState";
import Rook from "../pieces/rook/Rook";
import Color from "../pieces/Color";
import Knight from "../pieces/knight/Knight";
import Bishop from "../pieces/bishop/Bishop";
import Queen from "../pieces/queen/Queen";
import King from "../pieces/king/King";
import Pawn from "../pieces/pawn/Pawn";

describe('initial state' , function() {
    it('is as expected for white' , function() {
        let gameState = GameState.initial();

        expect(gameState.getSquare(0, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(gameState.getSquare(1, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(gameState.getSquare(2, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(gameState.getSquare(3, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(gameState.getSquare(4, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(gameState.getSquare(5, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(gameState.getSquare(6, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(gameState.getSquare(7, 1).piece).toEqual(new Pawn(Color.WHITE));

        expect(gameState.getSquare(0, 0).piece).toEqual(new Rook(Color.WHITE));
        expect(gameState.getSquare(1, 0).piece).toEqual(new Knight(Color.WHITE));
        expect(gameState.getSquare(2, 0).piece).toEqual(new Bishop(Color.WHITE));
        expect(gameState.getSquare(3, 0).piece).toEqual(new Queen(Color.WHITE));
        expect(gameState.getSquare(4, 0).piece).toEqual(new King(Color.WHITE));
        expect(gameState.getSquare(5, 0).piece).toEqual(new Bishop(Color.WHITE));
        expect(gameState.getSquare(6, 0).piece).toEqual(new Knight(Color.WHITE));
        expect(gameState.getSquare(7, 0).piece).toEqual(new Rook(Color.WHITE));
    });

    it('is as expected for black' , function() {
        let gameState = GameState.initial();

        expect(gameState.getSquare(0, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(gameState.getSquare(1, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(gameState.getSquare(2, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(gameState.getSquare(3, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(gameState.getSquare(4, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(gameState.getSquare(5, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(gameState.getSquare(6, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(gameState.getSquare(7, 6).piece).toEqual(new Pawn(Color.BLACK));

        expect(gameState.getSquare(0, 7).piece).toEqual(new Rook(Color.BLACK));
        expect(gameState.getSquare(1, 7).piece).toEqual(new Knight(Color.BLACK));
        expect(gameState.getSquare(2, 7).piece).toEqual(new Bishop(Color.BLACK));
        expect(gameState.getSquare(3, 7).piece).toEqual(new King(Color.BLACK));
        expect(gameState.getSquare(4, 7).piece).toEqual(new Queen(Color.BLACK));
        expect(gameState.getSquare(5, 7).piece).toEqual(new Bishop(Color.BLACK));
        expect(gameState.getSquare(6, 7).piece).toEqual(new Knight(Color.BLACK));
        expect(gameState.getSquare(7, 7).piece).toEqual(new Rook(Color.BLACK));
    });
});

describe('next player' , () => {
    it('is white in the beginning' , function() {
        let gameState = GameState.initial();
        expect(gameState.nextPlayer()).toEqual(Color.WHITE);
    });
});

describe('selection' , () => {
    it('initially no square is selected' , function() {
        let gameState = GameState.initial();
        for (let col = 0; col < 8; col++) {
            for (let row = 0; row < 8; row++) {
                expect(gameState.getSquare(7, 7).selected).toEqual(false);
            }
        }
    });

    it('player can not select empty square' , () => {
        let gameState = GameState.initial().squareClicked(4, 4);
        expect(gameState.getSquare(4, 4).selected).toEqual(false);
    });

    it('player can select own piece' , () => {
        let gameState = GameState.initial().squareClicked(0, 0);
        expect(gameState.getSquare(0, 0).selected).toEqual(true);
    });

    it('player can not select own opponent\'s piece' , () => {
        let gameState = GameState.initial().squareClicked(7, 7);
        expect(gameState.getSquare(7, 7).selected).toEqual(false);
    });

    it('upon selection of a piece, the squares it can move to are highlighted' , () => {
        let gameState = GameState.initial().squareClicked(6, 1);
        expect(gameState.getSquare(6, 2).highlighted).toEqual(true);
        expect(gameState.getSquare(6, 3).highlighted).toEqual(true);
    });

});