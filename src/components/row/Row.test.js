import React from 'react';
import * as Enzyme from 'enzyme'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Row from "./Row";
import BoardState from "../../boardstate/BoardState";
import Square from "../square/Square";
import Label from "../label/Label";
import Color from "../../pieces/Color";
import Rook from "../../pieces/rook/Rook";
import Knight from "../../pieces/knight/Knight";

describe('<Row />', () => {

  Enzyme.configure({ adapter: new Adapter() })

  it('each <Row /> has a label', () => {
    const wrapper = shallow(<Row row={0} boardState={BoardState.initial()} squareClicked={jest.fn()} />);
    expect(wrapper.find(Label)).toHaveLength(1);
  });

  it('the label of the bottom <Row /> is 1', () => {
    const wrapper = shallow(<Row row={0} boardState={BoardState.initial()} squareClicked={jest.fn()} />);
    expect(wrapper.find(Label).props()).toEqual({title: 1});
  });

  it('the label of the top <Row /> is 8', () => {
    const wrapper = shallow(<Row row={7} boardState={BoardState.initial()} squareClicked={jest.fn()} />);
    expect(wrapper.find(Label).props()).toEqual({title: 8});
  });

  it('each <Row /> has 8 squares', () => {
    const wrapper = shallow(<Row row={0} boardState={BoardState.initial()} squareClicked={jest.fn()} />);
    expect(wrapper.find(Square)).toHaveLength(8);
  });

  it('properties are passed from top <Row /> to <Square />s as expected', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Row row={7} boardState={BoardState.initial()} squareClicked={mockFn} />);
    expect(wrapper.find(Square).at(0).props()).toEqual({
      col: 0, row: 7, data: { piece: new Rook(Color.BLACK), selected: false }, squareClicked: mockFn
    });
    expect(wrapper.find(Square).at(1).props()).toEqual({
      col: 1, row: 7, data: { piece: new Knight(Color.BLACK), selected: false }, squareClicked: mockFn
    });
  });

  it('properties are passed from bottom <Row /> to <Square />s as expected', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Row row={0} boardState={BoardState.initial()} squareClicked={mockFn} />);
    expect(wrapper.find(Square).at(0).props()).toEqual({
      col: 0, row: 0, data: { piece: new Rook(Color.WHITE), selected: false }, squareClicked: mockFn
    });
    expect(wrapper.find(Square).at(1).props()).toEqual({
      col: 1, row: 0, data: { piece: new Knight(Color.WHITE), selected: false}, squareClicked: mockFn
    });
  });

  it('the last header row contains column names', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Row row='header' boardState={BoardState.initial()} squareClicked={mockFn} />);
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