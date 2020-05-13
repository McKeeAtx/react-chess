import GameState from "./GameState";
import Rook from "../pieces/rook/Rook";
import Color from "../common/Color";
import Knight from "../pieces/knight/Knight";
import Bishop from "../pieces/bishop/Bishop";
import Queen from "../pieces/queen/Queen";
import King from "../pieces/king/King";
import Pawn from "../pieces/pawn/Pawn";
import Squares, {
    A1,
    A2,
    A7,
    A8,
    B1,
    B2,
    B7,
    B8,
    C1,
    C2,
    C7,
    C8,
    D1,
    D2,
    D7,
    D8,
    E1,
    E2,
    E7,
    E8,
    F1,
    F2,
    F7,
    F8,
    G1,
    G2,
    G7,
    G8,
    H1,
    H2,
    H7,
    H8
} from "../common/Squares";


describe('initialBoard state' , () => {
    it('is as expected for white' , () => {
        let gameState = GameState.initialBoard();

        expect(gameState._getPiece(A2)).toEqual(Pawn.WHITE);
        expect(gameState._getPiece(B2)).toEqual(Pawn.WHITE);
        expect(gameState._getPiece(C2)).toEqual(Pawn.WHITE);
        expect(gameState._getPiece(D2)).toEqual(Pawn.WHITE);
        expect(gameState._getPiece(E2)).toEqual(Pawn.WHITE);
        expect(gameState._getPiece(F2)).toEqual(Pawn.WHITE);
        expect(gameState._getPiece(G2)).toEqual(Pawn.WHITE);
        expect(gameState._getPiece(H2)).toEqual(Pawn.WHITE);

        expect(gameState._getPiece(A1)).toEqual(new Rook(Color.WHITE));
        expect(gameState._getPiece(B1)).toEqual(Knight.WHITE);
        expect(gameState._getPiece(C1)).toEqual(new Bishop(Color.WHITE));
        expect(gameState._getPiece(D1)).toEqual(new Queen(Color.WHITE));
        expect(gameState._getPiece(E1)).toEqual(new King(Color.WHITE));
        expect(gameState._getPiece(F1)).toEqual(new Bishop(Color.WHITE));
        expect(gameState._getPiece(G1)).toEqual(Knight.WHITE);
        expect(gameState._getPiece(H1)).toEqual(new Rook(Color.WHITE));
    });

    it('is as expected for black' , () => {
        let gameState = GameState.initialBoard();

        expect(gameState._getPiece(A7)).toEqual(Pawn.BLACK);
        expect(gameState._getPiece(B7)).toEqual(Pawn.BLACK);
        expect(gameState._getPiece(C7)).toEqual(Pawn.BLACK);
        expect(gameState._getPiece(D7)).toEqual(Pawn.BLACK);
        expect(gameState._getPiece(E7)).toEqual(Pawn.BLACK);
        expect(gameState._getPiece(F7)).toEqual(Pawn.BLACK);
        expect(gameState._getPiece(G7)).toEqual(Pawn.BLACK);
        expect(gameState._getPiece(H7)).toEqual(Pawn.BLACK);

        expect(gameState._getPiece(A8)).toEqual(new Rook(Color.BLACK));
        expect(gameState._getPiece(B8)).toEqual(new Knight(Color.BLACK));
        expect(gameState._getPiece(C8)).toEqual(new Bishop(Color.BLACK));
        expect(gameState._getPiece(D8)).toEqual(new King(Color.BLACK));
        expect(gameState._getPiece(E8)).toEqual(new Queen(Color.BLACK));
        expect(gameState._getPiece(F8)).toEqual(new Bishop(Color.BLACK));
        expect(gameState._getPiece(G8)).toEqual(new Knight(Color.BLACK));
        expect(gameState._getPiece(H8)).toEqual(new Rook(Color.BLACK));
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
        Squares.all().forEach(square => expect(gameState._isSelected(square)).toEqual(false));
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