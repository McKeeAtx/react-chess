import React from 'react';
import * as Enzyme from 'enzyme'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Row from "./Row";
import GameState from "../../model/gamestate/GameState";
import Label from "../label/Label";
import SquareComponent from "../square/SquareComponent";
import {A1, A8, B1, B8} from "../../model/Square";

describe('<Row />', () => {

  Enzyme.configure({ adapter: new Adapter() })

  it('each <Row /> has a label', () => {
    const wrapper = shallow(<Row row={0} gameState={GameState.initialBoard()} onSquareClick={jest.fn()} />);
    expect(wrapper.find(Label)).toHaveLength(1);
  });

  it('the label of the bottom <Row /> is 1', () => {
    const wrapper = shallow(<Row row={0} gameState={GameState.initialBoard()} onSquareClick={jest.fn()} />);
    expect(wrapper.find(Label).props()).toEqual({title: 1});
  });

  it('the label of the top <Row /> is 8', () => {
    const wrapper = shallow(<Row row={7} gameState={GameState.initialBoard()} onSquareClick={jest.fn()} />);
    expect(wrapper.find(Label).props()).toEqual({title: 8});
  });

  it('each <Row /> has 8 squares', () => {
    const wrapper = shallow(<Row row={0} gameState={GameState.initialBoard()} onSquareClick={jest.fn()} />);
    expect(wrapper.find(SquareComponent)).toHaveLength(8);
  });

  it('properties are passed from top <Row /> to <SquareComponent />s as expected', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Row row={7} gameState={GameState.initialBoard()} onSquareClick={mockFn} />);
    expect(wrapper.find(SquareComponent).at(0).props()).toEqual({
      square: A8
    });
    expect(wrapper.find(SquareComponent).at(1).props()).toEqual({
      square: B8
    });
  });

  it('properties are passed from bottom <Row /> to <SquareComponent />s as expected', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Row row={0} gameState={GameState.initialBoard()} onSquareClick={mockFn} />);
    expect(wrapper.find(SquareComponent).at(0).props()).toEqual({
      square: A1
    });
    expect(wrapper.find(SquareComponent).at(1).props()).toEqual({
      square: B1
    });
  });

  it('the last header row contains column names', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Row row='header' gameState={GameState.initialBoard()} onSquareClick={mockFn} />);
    expect(wrapper.find(Label).at(0).props()).toEqual({
      "title": ""
    });
    expect(wrapper.find(Label).at(1).props()).toEqual({
      "title": "A"
    });
    expect(wrapper.find(Label).at(8).props()).toEqual({
      "title": "H"
    });
  });


});