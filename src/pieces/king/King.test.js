import King from "./King";
import GameState from "../../gamestate/GameState";
import Square, {C3, C4, C5, D3, D4, D5, E3, E4, E5, F6} from "../../common/Square";
import Pawn from "../pawn/Pawn";

describe('king' , () => {

    it('K denotes a king' , () => {
        expect(King.BLACK.getLetter()).toEqual("K");
    });

    it('white king on an empty board at D4 can move to all adjacent squares' , () => {
        let gameState = GameState.emptyBoard()
            .setPiece(D4, King.WHITE);
        expect(gameState.getAllowedMoves(D4).sort(Square.COMPARATOR)).toEqual([
            C3, C4, C5,
            D3, D5, E3,
            E4, E5
        ]);
    });

    it('white king that shares the board with other pieces can\'t move to all adjacent squares' , () => {
        let gameState = GameState.emptyBoard()
            .setPiece(D4, King.WHITE)
            .setPiece(F6, King.BLACK)
            .setPiece(C5, Pawn.WHITE)
            .setPiece(C4, Pawn.BLACK)
        expect(gameState.getAllowedMoves(D4).sort(Square.COMPARATOR)).toEqual([
            C3, C4, C5,
            D3, D5, E3,
            E4
        ]);
    });

});