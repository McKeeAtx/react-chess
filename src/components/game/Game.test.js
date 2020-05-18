import React from 'react';
import Game from "./Game";
import * as Enzyme from "enzyme";
import {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GameState from "../../model/gamestate/GameState";
import Board from "../board/Board";
import {A1} from "../../model/Square";
import GameModel from "../../model/game/Game";

describe('<Game />', () => {

  Enzyme.configure({adapter: new Adapter()})

  it('<Game /> initially renders a board with each piece at the starting position', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find(Board).props().gameState).toEqual(GameState.initialBoard());
  });

  it('the Game components delegates state handling to the Game model', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.state()).toEqual({game: GameModel.INITIAL});
    wrapper.instance().handleSquareClick(A1);
    expect(wrapper.state()).toEqual({game: GameModel.INITIAL.handleSquareClick(A1)});
  });

});