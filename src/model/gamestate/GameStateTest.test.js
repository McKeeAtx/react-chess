import GameState from "./GameState";
import Rook from "../pieces/rook/Rook";
import Color from "../Color";
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
} from "../Square";
import None from "../pieces/none/None";


describe('initialBoard state' , () => {
    it('is as expected for white' , () => {
        let gameState = GameState.initialBoard();

        expect(gameState.get(A2)).toEqual(Pawn.WHITE);
        expect(gameState.get(B2)).toEqual(Pawn.WHITE);
        expect(gameState.get(C2)).toEqual(Pawn.WHITE);
        expect(gameState.get(D2)).toEqual(Pawn.WHITE);
        expect(gameState.get(E2)).toEqual(Pawn.WHITE);
        expect(gameState.get(F2)).toEqual(Pawn.WHITE);
        expect(gameState.get(G2)).toEqual(Pawn.WHITE);
        expect(gameState.get(H2)).toEqual(Pawn.WHITE);

        expect(gameState.get(A1)).toEqual(new Rook(Color.WHITE));
        expect(gameState.get(B1)).toEqual(Knight.WHITE);
        expect(gameState.get(C1)).toEqual(new Bishop(Color.WHITE));
        expect(gameState.get(D1)).toEqual(new Queen(Color.WHITE));
        expect(gameState.get(E1)).toEqual(new King(Color.WHITE));
        expect(gameState.get(F1)).toEqual(new Bishop(Color.WHITE));
        expect(gameState.get(G1)).toEqual(Knight.WHITE);
        expect(gameState.get(H1)).toEqual(new Rook(Color.WHITE));
    });

    it('is as expected for black' , () => {
        let gameState = GameState.initialBoard();

        expect(gameState.get(A7)).toEqual(Pawn.BLACK);
        expect(gameState.get(B7)).toEqual(Pawn.BLACK);
        expect(gameState.get(C7)).toEqual(Pawn.BLACK);
        expect(gameState.get(D7)).toEqual(Pawn.BLACK);
        expect(gameState.get(E7)).toEqual(Pawn.BLACK);
        expect(gameState.get(F7)).toEqual(Pawn.BLACK);
        expect(gameState.get(G7)).toEqual(Pawn.BLACK);
        expect(gameState.get(H7)).toEqual(Pawn.BLACK);

        expect(gameState.get(A8)).toEqual(new Rook(Color.BLACK));
        expect(gameState.get(B8)).toEqual(new Knight(Color.BLACK));
        expect(gameState.get(C8)).toEqual(new Bishop(Color.BLACK));
        expect(gameState.get(D8)).toEqual(new King(Color.BLACK));
        expect(gameState.get(E8)).toEqual(new Queen(Color.BLACK));
        expect(gameState.get(F8)).toEqual(new Bishop(Color.BLACK));
        expect(gameState.get(G8)).toEqual(new Knight(Color.BLACK));
        expect(gameState.get(H8)).toEqual(new Rook(Color.BLACK));
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
        [E2, E3, E4, E5, E6, F3, F4, F6, F7].forEach(square => expect(gameState.get(square)).toEqual(None.INSTANCE))
        expect(gameState.get(F5)).toEqual(Pawn.WHITE);
    });
});