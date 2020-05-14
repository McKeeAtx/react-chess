import React from 'react';
import Game from "./Game";
import {E2, E3, F5, F7} from "../common/Square";

const toString = game => {
  const states = game.states.map((state, index) => {
    return {
      index: index,
      clicks: state.clicks.map(click => click.getName()),
      moves: state.moves.map(move => move.getName())
    }
  });
  return { currentState: game.indexOfCurrentState, states: states };
}

describe('game' , () => {
  it('keeps track of the current and all previous states' , () => {
    
    let game = Game.INITIAL;
    expect(toString(game)).toEqual({
      currentState: 0,
      states: [
        { index: 0, clicks: [], moves: [] }
      ]
    });
    game = game.handleSquareClick(E2);
    expect(toString(game)).toEqual({
      currentState: 1,
      states: [
          { index: 0, clicks: [], moves: [] },
          { index: 1, clicks: ["E2"], moves: [] }
        ]
    });
    game = game.handleSquareClick(E3);
    expect(toString(game)).toEqual({
      currentState: 2,
      states: [
        { index: 0, clicks: [], moves: [] },
        { index: 1, clicks: ["E2"], moves: [] },
        { index: 2, clicks: ["E2", "E3"], moves: ["E2-E3"] }
      ]
    });
    game = game.handleSquareClick(F7);
    expect(toString(game)).toEqual({
      currentState: 3,
      states: [
        { index: 0, clicks: [], moves: [] },
        { index: 1, clicks: ["E2"], moves: [] },
        { index: 2, clicks: ["E2", "E3"], moves: ["E2-E3"] },
        { index: 3, clicks: ["E2", "E3", "F7"], moves: ["E2-E3"] }
      ]
    });
    game = game.handleSquareClick(F5);
    expect(toString(game)).toEqual({
      currentState: 4,
      states: [
        { index: 0, clicks: [], moves: [] },
        { index: 1, clicks: ["E2"], moves: [] },
        { index: 2, clicks: ["E2", "E3"], moves: ["E2-E3"] },
        { index: 3, clicks: ["E2", "E3", "F7"], moves: ["E2-E3"] },
        { index: 4, clicks: ["E2", "E3", "F7", "F5"], moves: ["E2-E3", "F7-F5"] }
      ]
    });
  });

  it('useless click states are discarded' , () => {
    expect(true).toEqual(false);
  });

  it('a click lets us travel back and forth in time' , () => {
    expect(true).toEqual(false);
  });

  it('a click on a square when viewing an old moves removes newer moves' , () => {
    expect(true).toEqual(false);
  });

});