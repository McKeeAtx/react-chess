import GameState from "./GameState";
import Rook from "../pieces/rook/Rook";
import Color from "../common/Color";
import Knight from "../pieces/knight/Knight";
import Bishop from "../pieces/bishop/Bishop";
import Queen from "../pieces/queen/Queen";
import King from "../pieces/king/King";
import Pawn from "../pieces/pawn/Pawn";
import Square, {
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
    D2, D4,
    D7,
    D8,
    E1,
    E2, E3, E4, E5, E6,
    E7,
    E8,
    F1,
    F2, F3, F4, F5, F6,
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
} from "../common/Square";
import None from "../pieces/none/None";


describe('initialBoard state' , () => {
    it('is as expected for white' , () => {
        let gameState = GameState.initialBoard();

        expect(gameState.getPiece(A2)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(B2)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(C2)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(D2)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(E2)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(F2)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(G2)).toEqual(Pawn.WHITE);
        expect(gameState.getPiece(H2)).toEqual(Pawn.WHITE);

        expect(gameState.getPiece(A1)).toEqual(new Rook(Color.WHITE));
        expect(gameState.getPiece(B1)).toEqual(Knight.WHITE);
        expect(gameState.getPiece(C1)).toEqual(new Bishop(Color.WHITE));
        expect(gameState.getPiece(D1)).toEqual(new Queen(Color.WHITE));
        expect(gameState.getPiece(E1)).toEqual(new King(Color.WHITE));
        expect(gameState.getPiece(F1)).toEqual(new Bishop(Color.WHITE));
        expect(gameState.getPiece(G1)).toEqual(Knight.WHITE);
        expect(gameState.getPiece(H1)).toEqual(new Rook(Color.WHITE));
    });

    it('is as expected for black' , () => {
        let gameState = GameState.initialBoard();

        expect(gameState.getPiece(A7)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(B7)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(C7)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(D7)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(E7)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(F7)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(G7)).toEqual(Pawn.BLACK);
        expect(gameState.getPiece(H7)).toEqual(Pawn.BLACK);

        expect(gameState.getPiece(A8)).toEqual(new Rook(Color.BLACK));
        expect(gameState.getPiece(B8)).toEqual(new Knight(Color.BLACK));
        expect(gameState.getPiece(C8)).toEqual(new Bishop(Color.BLACK));
        expect(gameState.getPiece(D8)).toEqual(new King(Color.BLACK));
        expect(gameState.getPiece(E8)).toEqual(new Queen(Color.BLACK));
        expect(gameState.getPiece(F8)).toEqual(new Bishop(Color.BLACK));
        expect(gameState.getPiece(G8)).toEqual(new Knight(Color.BLACK));
        expect(gameState.getPiece(H8)).toEqual(new Rook(Color.BLACK));
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
        Square.all().forEach(square => expect(gameState.isSelected(square)).toEqual(false));
    });

    it('player can not select empty square' , () => {
        let gameState = GameState.initialBoard().handleSquareClick(E5);
        expect(gameState.isSelected(E5)).toEqual(false);
    });

    it('player can select own piece' , () => {
        let gameState = GameState.initialBoard().handleSquareClick(A1);
        expect(gameState.isSelected(A1)).toEqual(true);
    });

    it('player can not select own opponent\'s piece' , () => {
        let gameState = GameState.initialBoard().handleSquareClick(H8);
        expect(gameState.isSelected(H8)).toEqual(false);
    });

});

describe('highlighting' , () => {
    it('initially no square is highlighted' , () => {
        let gameState = GameState.initialBoard();
        Square.all().forEach(square => expect(gameState.isHighlighted(square)).toEqual(false));
    });

    it('upon selection of a piece, the squares it can move to are highlighted' , () => {
        let gameState = GameState.initialBoard().handleSquareClick(F2);
        expect(gameState.isHighlighted(F3)).toEqual(true);
        expect(gameState.isHighlighted(F4)).toEqual(true);
    });
});

describe('test moves' , () => {
    it('some pawn play' , () => {
        let gameState = GameState.initialBoard()
            .handleSquareClick(E2)
            .handleSquareClick(E4)
            .handleSquareClick(F7)
            .handleSquareClick(F5)
            .handleSquareClick(E4)
            .handleSquareClick(F5);
        [E2, E3, E4, E5, E6, F3, F4, F6, F7].forEach(square => expect(gameState.getPiece(square)).toEqual(None.INSTANCE))
        expect(gameState.getPiece(F5)).toEqual(Pawn.WHITE);
    });
});