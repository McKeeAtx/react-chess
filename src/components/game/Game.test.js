import React from 'react';
import Game from "./Game";
import * as Enzyme from "enzyme";
import {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GameState from "../../gamestate/GameState";
import Board from "../board/Board";
import {A1, E2} from "../../common/Squares";

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

describe('move list' , () => {
  it('n/a' , () => {
    const wrapper = shallow(<Game />);
    wrapper.instance.handleSquareClick(E2);
    expect(wrapper.find(Board).props().gameState).toEqual(GameState.initialBoard());
  });
});