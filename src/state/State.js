import Color from "../pieces/Color";
import Pawn from "../pieces/pawn/Pawn";
import Rook from "../pieces/rook/Rook";
import Knight from "../pieces/knight/Knight";
import Bishop from "../pieces/bishop/Bishop";
import Queen from "../pieces/queen/Queen";
import King from "../pieces/king/King";

class State  {

    board = [];

    constructor() {
        for (let i = 0; i < 8; i++) {
            this.board.push([null, null, null, null, null, null, null, null]);
        }
    }

    static initial() {
        let state = new State();
        for (let col = 0; col < 8; col++) {
            state.board[col][1] = new Pawn(Color.WHITE);
            state.board[col][6] = new Pawn(Color.BLACK);
        }
        state.board[0][0] = new Rook(Color.WHITE);
        state.board[7][0] = new Rook(Color.WHITE);
        state.board[0][7] = new Rook(Color.BLACK);
        state.board[7][7] = new Rook(Color.BLACK);
        state.board[1][0] = new Knight(Color.WHITE);
        state.board[6][0] = new Knight(Color.WHITE);
        state.board[1][7] = new Knight(Color.BLACK);
        state.board[6][7] = new Knight(Color.BLACK);
        state.board[2][0] = new Bishop(Color.WHITE);
        state.board[5][0] = new Bishop(Color.WHITE);
        state.board[2][7] = new Bishop(Color.BLACK);
        state.board[5][7] = new Bishop(Color.BLACK);
        state.board[3][0] = new Queen(Color.WHITE);
        state.board[4][0] = new King(Color.WHITE);
        state.board[3][7] = new King(Color.BLACK);
        state.board[4][7] = new Queen(Color.BLACK);
        return state;
    }

    getPiece(col, row) {
        return this.board[col][row];
    }

}

export default State;