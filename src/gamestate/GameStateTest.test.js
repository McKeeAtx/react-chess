import GameState from "./GameState";
import Rook from "../pieces/rook/Rook";
import Color from "../common/Color";
import Knight from "../pieces/knight/Knight";
import Bishop from "../pieces/bishop/Bishop";
import Queen from "../pieces/queen/Queen";
import King from "../pieces/king/King";
import Pawn from "../pieces/pawn/Pawn";
import A2 from "../common/Coordinate";


describe('initialBoard state' , () => {
    it('is as expected for white' , () => {
        let gameState = GameState.initialBoard();

        expect(gameState.getPiece(A2)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(1, 1)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(2, 1)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(3, 1)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(4, 1)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(5, 1)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(6, 1)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(7, 1)).toEqual(Pawn.WHITE);

        expect(gameState.getPiece(0, 0)).toEqual(new Rook(Color.WHITE));
        expect(gameState.getPiece(1, 0)).toEqual(new Knight(Color.WHITE));
        expect(gameState.getPiece(2, 0)).toEqual(new Bishop(Color.WHITE));
        expect(gameState.getPiece(3, 0)).toEqual(new Queen(Color.WHITE));
        expect(gameState.getPiece(4, 0)).toEqual(new King(Color.WHITE));
        expect(gameState.getPiece(5, 0)).toEqual(new Bishop(Color.WHITE));
        expect(gameState.getPiece(6, 0)).toEqual(new Knight(Color.WHITE));
        expect(gameState.getPiece(7, 0)).toEqual(new Rook(Color.WHITE));
    });

    it('is as expected for black' , () => {
        let gameState = GameState.initialBoard();

        expect(gameState.getPiece(0, 6)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(1, 6)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(2, 6)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(3, 6)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(4, 6)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(5, 6)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(6, 6)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(7, 6)).toEqual(Pawn.BLACK);

        expect(gameState.getPiece(0, 7)).toEqual(new Rook(Color.BLACK));
        expect(gameState.getPiece(1, 7)).toEqual(new Knight(Color.BLACK));
        expect(gameState.getPiece(2, 7)).toEqual(new Bishop(Color.BLACK));
        expect(gameState.getPiece(3, 7)).toEqual(new King(Color.BLACK));
        expect(gameState.getPiece(4, 7)).toEqual(new Queen(Color.BLACK));
        expect(gameState.getPiece(5, 7)).toEqual(new Bishop(Color.BLACK));
        expect(gameState.getPiece(6, 7)).toEqual(new Knight(Color.BLACK));
        expect(gameState.getPiece(7, 7)).toEqual(new Rook(Color.BLACK));
    });
});

describe('next player' , () => {
    it('is white in the beginning' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.nextPlayer()).toEqual(Color.WHITE);
    });
});

describe('selection' , () => {
    it('initially no square is selected' , () => {
        let gameState = GameState.initialBoard();
        for (let col = 0; col < 8; col++) {
            for (let row = 0; row < 8; row++) {
                expect(gameState.isSelected(col, row)).toEqual(false);
            }
        }
    });

    it('player can not select empty square' , () => {
        let gameState = GameState.initialBoard().handleSquareClick(4, 4);
        expect(gameState.isSelected(4, 4)).toEqual(false);
    });

    it('player can select own piece' , () => {
        let gameState = GameState.initialBoard().handleSquareClick(0, 0);
        expect(gameState.isSelected(0, 0)).toEqual(true);
    });

    it('player can not select own opponent\'s piece' , () => {
        let gameState = GameState.initialBoard().handleSquareClick(7, 7);
        expect(gameState.isSelected(7, 7)).toEqual(false);
    });

});

describe('highlighting' , () => {
    it('initially no square is highlighted' , () => {
        let gameState = GameState.initialBoard();
        for (let col = 0; col < 8; col++) {
            for (let row = 0; row < 8; row++) {
                expect(gameState.isHighlighted(col, row)).toEqual(false);
            }
        }
    });

    it('upon selection of a piece, the squares it can move to are highlighted' , () => {
        let gameState = GameState.initialBoard().handleSquareClick(6, 1);
        expect(gameState.isHighlighted(6, 2)).toEqual(true);
        expect(gameState.isHighlighted(6, 3)).toEqual(true);
    });
});

describe('test moves' , () => {
    it('move white pawn' , () => {
        let gameState = GameState.initialBoard().handleSquareClick(6, 1);
        expect(true).toEqual(false);
    });
});