import React from 'react';
import Game from "./Game";
import * as Enzyme from "enzyme";
import {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GameState from "../../gamestate/GameState";
import Board from "../board/Board";
import {A1, E2, E3, F5, F7} from "../../common/Squares";
import Move from "../move/Move";
import Square from "../square/Square";
import Knight from "../../pieces/knight/Knight";
import Color from "../../common/Color";

describe('<Game />', () => {

  Enzyme.configure({adapter: new Adapter()})

  it('<Game /> initially renders a board with each piece at the starting position', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(Board).props().gameState).toEqual(GameState.initialBoard());
  });

  it('<Game /> initially renders a board with each piece at the starting position', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(Board).props().gameState).toEqual(GameState.initialBoard());
  });

  it('a click adds a new GameState to the state', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.state()).toEqual({gameStates: [GameState.initialBoard()], indexOfCurrentState: 0});
    wrapper.instance().handleSquareClick(A1);
    expect(wrapper.state()).toEqual({gameStates: [GameState.initialBoard(), GameState.initialBoard().handleSquareClick(A1)], indexOfCurrentState: 1});
  });

});

describe('the list of moves' , () => {
  it('keeps track of every move' , () => {

    const getProps = (wrapper) => wrapper.find(Move).map(move => { return {index: move.props().index, name: move.props().name, btnClass: move.props().btnClass} });
    const wrapper = shallow(<Game />);
    wrapper.instance().handleSquareClick(E2);
    expect(getProps(wrapper)).toEqual([]);
    wrapper.instance().handleSquareClick(E3);
    expect(getProps(wrapper)).toEqual([
      { index: 2, name: 'E3', btnClass: 'highlighted' }
    ]);
    wrapper.instance().handleSquareClick(F7);
    expect(getProps(wrapper)).toEqual([
      { index: 2, name: 'E3', btnClass: 'highlighted' }
    ]);
    wrapper.instance().handleSquareClick(F5);
    expect(getProps(wrapper)).toEqual([
      { index: 2, name: 'E3', btnClass: '' },
      { index: 4, name: 'F5', btnClass: 'highlighted' }
    ]);
  });
});