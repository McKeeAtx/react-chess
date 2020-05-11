import * as assert from "assert";
import BoardState from "./BoardState";
import Rook from "../pieces/rook/Rook";
import Color from "../pieces/Color";
import Knight from "../pieces/knight/Knight";
import Bishop from "../pieces/bishop/Bishop";
import Queen from "../pieces/queen/Queen";
import King from "../pieces/king/King";
import Pawn from "../pieces/pawn/Pawn";

describe('initial state' , function() {
    it('is as expected for white' , function() {
        let boardState = BoardState.initial();

        expect(boardState.getData(0, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(boardState.getData(1, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(boardState.getData(2, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(boardState.getData(3, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(boardState.getData(4, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(boardState.getData(5, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(boardState.getData(6, 1).piece).toEqual(new Pawn(Color.WHITE));
        expect(boardState.getData(7, 1).piece).toEqual(new Pawn(Color.WHITE));

        expect(boardState.getData(0, 0).piece).toEqual(new Rook(Color.WHITE));
        expect(boardState.getData(1, 0).piece).toEqual(new Knight(Color.WHITE));
        expect(boardState.getData(2, 0).piece).toEqual(new Bishop(Color.WHITE));
        expect(boardState.getData(3, 0).piece).toEqual(new Queen(Color.WHITE));
        expect(boardState.getData(4, 0).piece).toEqual(new King(Color.WHITE));
        expect(boardState.getData(5, 0).piece).toEqual(new Bishop(Color.WHITE));
        expect(boardState.getData(6, 0).piece).toEqual(new Knight(Color.WHITE));
        expect(boardState.getData(7, 0).piece).toEqual(new Rook(Color.WHITE));
    });

    it('is as expected for black' , function() {
        let boardState = BoardState.initial();

        expect(boardState.getData(0, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(boardState.getData(1, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(boardState.getData(2, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(boardState.getData(3, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(boardState.getData(4, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(boardState.getData(5, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(boardState.getData(6, 6).piece).toEqual(new Pawn(Color.BLACK));
        expect(boardState.getData(7, 6).piece).toEqual(new Pawn(Color.BLACK));

        expect(boardState.getData(0, 7).piece).toEqual(new Rook(Color.BLACK));
        expect(boardState.getData(1, 7).piece).toEqual(new Knight(Color.BLACK));
        expect(boardState.getData(2, 7).piece).toEqual(new Bishop(Color.BLACK));
        expect(boardState.getData(3, 7).piece).toEqual(new King(Color.BLACK));
        expect(boardState.getData(4, 7).piece).toEqual(new Queen(Color.BLACK));
        expect(boardState.getData(5, 7).piece).toEqual(new Bishop(Color.BLACK));
        expect(boardState.getData(6, 7).piece).toEqual(new Knight(Color.BLACK));
        expect(boardState.getData(7, 7).piece).toEqual(new Rook(Color.BLACK));
    });
});

describe('next player' , function() {
    it('is white in the beginning' , function() {
        let boardState = BoardState.initial();
        expect(boardState.nextPlayer()).toEqual(Color.WHITE);
    });
});

describe('highlighting' , function(){
    it('initially no square is highlighted' , function() {
        let boardState = BoardState.initial();
        for (let col = 0; col < 8; col++) {
            for (let row = 0; row < 8; row++) {
                expect(boardState.getData(7, 7).highlighted).toEqual(false);
            }
        }
    });

    it('a click on an empty square does not result in highlighting' , function() {
        let boardState = BoardState.initial().onClick(4, 4);
        expect(boardState.getData(4, 4).highlighted).toEqual(false);
    });

    it('own pieces are highlighted upon click' , function() {
        let boardState = BoardState.initial().onClick(0, 0);
        expect(boardState.getData(0, 0).highlighted).toEqual(true);
    });

    it('opponent pieces are not highlighted upon click' , function() {
        let boardState = BoardState.initial().onClick(7, 7);
        expect(boardState.getData(7, 7).highlighted).toEqual(false);
    });

});