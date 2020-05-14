import GameState from "../../gamestate/GameState";
import Pawn from "../pawn/Pawn";
import Square, {
    A1, A4, A5,
    A7,
    B2, B4, B5,
    B6,
    C2,
    C3, C4,
    C5, D1, D2,
    D3,
    D4, D5, D6,
    D7,
    E3,
    E4,
    E5,
    E6, F1,
    F2, F3, F4,
    F5,
    F6, F7, F8,
    G1, G4, G5,
    G6,
    G7, H3, H4, H5,
    H7,
    H8
} from "../../common/Square";
import Queen from "./Queen";

describe('queen' , () => {

    it('Q denotes a queen', () => {
        expect(Queen.BLACK.getLetter()).toEqual("Q");
    });

    it('test bishop example from Wikipedia with queens instead of bishops', () => {
        let gameState = GameState.emptyBoard()
            .setPiece(C2, Pawn.WHITE)
            .setPiece(D7, Pawn.BLACK)
            .setPiece(D4, Queen.BLACK)
            .setPiece(F5, Queen.WHITE);
        expect(gameState.getAllowedMoves(D4).sort(Square.COMPARATOR)).toEqual(
            [
                A1, A4, A7, B2, B4,
                B6, C3, C4, C5, D1,
                D2, D3, D5, D6, E3,
                E4, E5, F2, F4, F6,
                G1, G4, G7, H4, H8
            ].sort(Square.COMPARATOR)
        );
        expect(gameState.getAllowedMoves(F5).sort(Square.COMPARATOR)).toEqual(
            [
                A5, B5, C5, D3,
                D5, D7, E4, E5,
                E6, F1, F2, F3,
                F4, F6, F7, F8,
                G4, G5, G6, H3,
                H5, H7
            ].sort(Square.COMPARATOR)
        );
    });

});