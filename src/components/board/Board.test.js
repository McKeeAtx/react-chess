import React from 'react';
import * as Enzyme from "enzyme";
import {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GameState from "../../gamestate/GameState";
import Board from "../board/Board";
import Row from "../row/Row";

describe('<Board />', () => {

  Enzyme.configure({adapter: new Adapter()})

  it('<Board /> renders 8 rows plus 1 row with column names', () => {
    const wrapper = shallow(<Board gameState={GameState.initialBoard()} squareClicked={jest.fn()} />);
    expect(wrapper.find(Row)).toHaveLength(9);
  });

  it('the top row has row id 7', () => {
    const wrapper = shallow(<Board gameState={GameState.initialBoard()} squareClicked={jest.fn()} />);
    expect(wrapper.find(Row).at(0).props().row).toEqual(7);
  });

  it('the bottom row has row id 0', () => {
    const wrapper = shallow(<Board gameState={GameState.initialBoard()} squareClicked={jest.fn()} />);
    expect(wrapper.find(Row).at(7).props().row).toEqual(0);
  });

  it('the bottom row is followed by a header row that contains column names', () => {
    const wrapper = shallow(<Board gameState={GameState.initialBoard()} squareClicked={jest.fn()} />);
    expect(wrapper.find(Row).at(8).props().row).toEqual("header");
  });

});