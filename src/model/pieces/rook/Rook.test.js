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
} from "../../Square";
import Rook from "./Rook";

describe('rook' , () => {

    it('R denotes a rook', () => {
        expect(Rook.BLACK.getLetter()).toEqual("R");
    });

    it('test rook moves', () => {
        let gameState = GameState.emptyBoard()
            .set(D2, Pawn.WHITE)
            .set(D7, Pawn.BLACK)
            .set(D4, Rook.BLACK)
            .set(F4, Rook.WHITE);
        expect(gameState.getAllowedSquares(D4).sort(Square.COMPARATOR)).toEqual(
            [
                A4, B4, C4,
                D2, D3, D5,
                D6, E4, F4
            ].sort(Square.COMPARATOR)
        );
        expect(gameState.getAllowedSquares(F4).sort(Square.COMPARATOR)).toEqual(
            [
                D4, E4, F1,
                F2, F3, F5,
                F6, F7, F8,
                G4, H4
            ].sort(Square.COMPARATOR)
        );
    });

});