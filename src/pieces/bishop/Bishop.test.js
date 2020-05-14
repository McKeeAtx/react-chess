import GameState from "../../gamestate/GameState";
import Bishop from "./Bishop";
import Pawn from "../pawn/Pawn";
import Squares, {
    A1,
    A7,
    B2,
    B6,
    C2,
    C3,
    C5,
    D3,
    D4,
    D7,
    E3,
    E4,
    E5,
    E6,
    F2,
    F5,
    F6,
    G1, G4,
    G6,
    G7, H3,
    H7,
    H8
} from "../../common/Squares";

describe('bishop' , () => {

    it('B denotes a bishop' , () => {
        expect(Bishop.BLACK.getLetter()).toEqual("B");
    });

    it('test example from Wikipedia' , () => {
        let gameState = GameState.emptyBoard()
            .setPiece(C2, Pawn.WHITE)
            .setPiece(D7, Pawn.BLACK)
            .setPiece(D4, Bishop.BLACK)
            .setPiece(F5, Bishop.WHITE);
        expect(gameState.getAllowedMoves(D4).sort(Squares.COMPARATOR)).toEqual(
            [C5, B6, A7, C3, B2, A1, E5, F6, G7, H8, E3, F2, G1].sort(Squares.COMPARATOR)
        );
        expect(gameState.getAllowedMoves(F5).sort(Squares.COMPARATOR)).toEqual(
            [E6, D7, E4, D3, G6, H7, G4, H3].sort(Squares.COMPARATOR)
        );
    });

});