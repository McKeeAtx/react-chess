import GameState from "../../gamestate/GameState";
import Bishop from "./Bishop";
import Pawn from "../pawn/Pawn";
import Square, {
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
} from "../../common/Square";

describe('bishop' , () => {

    it('B denotes a bishop' , () => {
        expect(Bishop.BLACK.getLetter()).toEqual("B");
    });

    it('test example from Wikipedia' , () => {
        let gameState = GameState.emptyBoard()
            .set(C2, Pawn.WHITE)
            .set(D7, Pawn.BLACK)
            .set(D4, Bishop.BLACK)
            .set(F5, Bishop.WHITE);
        expect(gameState.getAllowedSquares(D4).sort(Square.COMPARATOR)).toEqual(
            [C5, B6, A7, C3, B2, A1, E5, F6, G7, H8, E3, F2, G1].sort(Square.COMPARATOR)
        );
        expect(gameState.getAllowedSquares(F5).sort(Square.COMPARATOR)).toEqual(
            [E6, D7, E4, D3, G6, H7, G4, H3].sort(Square.COMPARATOR)
        );
    });

});