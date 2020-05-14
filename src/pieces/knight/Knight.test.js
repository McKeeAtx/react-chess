import Knight from "./Knight";
import GameState from "../../gamestate/GameState";
import {A3, A6, B1, B8, C3, C4, C6, D3, D7, E5, F3, F6, F7, G1, G4, G6, G8, H3, H6} from "../../common/Square";

describe('knight' , () => {

    it('N denotes a knight' , () => {
        expect(Knight.BLACK.getLetter()).toEqual("N");
    });

    it('white knight on B1 can move to C3 and A3' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(B1)).toEqual([C3, A3]);
    });

    it('white knight on G1 can move to H3 and F3' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(G1)).toEqual([H3, F3]);
    });

    it('black knight on B8 can move to C6 and A6' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(B8)).toEqual([C6, A6]);
    });

    it('black knight on G8 can move to H6 and F6' , () => {
        let gameState = GameState.initialBoard();
        expect(gameState.getAllowedMoves(G8)).toEqual([H6, F6]);
    });

    it('black knight that sits on empty board at E5 can move to 8 squares' , () => {
        let gameState = GameState.emptyBoard().setPiece(E5, Knight.BLACK);
        expect(gameState.getAllowedMoves(E5)).toEqual([F7, D7, F3, D3, G6, C6, G4, C4]);
    });

});