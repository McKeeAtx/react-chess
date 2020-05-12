import React from 'react';
import Game from "./Game";
import * as Enzyme from "enzyme";
import {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GameState from "../../gamestate/GameState";
import Board from "../board/Board";
import Row from "../row/Row";

describe('<Game />', () => {

  Enzyme.configure({adapter: new Adapter()})

  it('<Game /> initially renders a board with each piece at the starting position', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(Board).props().gameState).toEqual(GameState.initial());
  });

  it('<Game /> initially renders a board with each piece at the starting position', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(Board).props().gameState).toEqual(GameState.initial());
  });

  it('a click creates adds a new GameState to the state', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.state()).toEqual({gameStates: [GameState.initial()]});
    wrapper.instance().squareClicked(0, 0);
    expect(wrapper.state()).toEqual({gameStates: [GameState.initial(), GameState.initial().squareClicked(0, 0)]});
  });

});