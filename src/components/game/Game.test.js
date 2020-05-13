import React from 'react';
import Game from "./Game";
import * as Enzyme from "enzyme";
import {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GameState from "../../gamestate/GameState";
import Board from "../board/Board";

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
    wrapper.instance().handleSquareClick(0, 0);
    expect(wrapper.state()).toEqual({gameStates: [GameState.initialBoard(), GameState.initialBoard().handleSquareClick(0, 0)], indexOfCurrentState: 1});
  });

});

describe('move list' , () => {
  it('n/a' , () => {
    expect(true).toEqual(false);
  });
});