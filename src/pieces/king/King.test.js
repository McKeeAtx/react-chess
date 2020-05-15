import King from "./King";
import GameState from "../../gamestate/GameState";
import Square, {A2, B2, C2, C3, C4, C5, D2, D3, D4, D5, E2, E3, E4, E5, F2, F6} from "../../common/Square";
import Pawn from "../pawn/Pawn";
import Rook from "../rook/Rook";

describe('king' , () => {

    it('K denotes a king' , () => {
        expect(King.BLACK.getLetter()).toEqual("K");
    });

    it('a king on an empty board at D4 can move to all adjacent squares' , () => {
        let gameState = GameState.emptyBoard()
            .set(D4, King.WHITE);
        expect(gameState.getAllowedSquares(D4).sort(Square.COMPARATOR)).toEqual([
            C3, C4, C5, D3, D5, E3, E4, E5
        ]);
    });

    it('a king that shares the board with other pieces can\'t move to all adjacent squares' , () => {
        let gameState = GameState.emptyBoard()
            .set(D4, King.WHITE)
            .set(C5, Pawn.WHITE)
            .set(C4, Pawn.BLACK)
        expect(gameState.getAllowedSquares(D4).sort(Square.COMPARATOR)).toEqual([
            C3, C4, D5, E3, E4, E5
        ]);
    });

    it('a king can\'t move to a field where he would be under attack' , () => {
        let gameState = GameState.emptyBoard()
            .set(D4, King.WHITE)
            .set(F6, King.BLACK)
        expect(gameState.getAllowedSquares(D4).sort(Square.COMPARATOR)
            .find( s => s === E5)).toEqual(undefined);
    });

    it('a piece can\'t move if that would expose the king to an attack' , () => {
        let gameState = GameState.emptyBoard()
            .set(A2, King.WHITE)
            .set(D2, Rook.WHITE)
            .set(F2, Rook.BLACK);
        expect(gameState.getAllowedSquares(D2).sort(Square.COMPARATOR)).toEqual(
            [B2, C2, E2, F2]
        );
    });

});