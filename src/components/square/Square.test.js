import React from 'react';
import {mount, shallow} from 'enzyme'
import Pawn from "../../pieces/pawn/Pawn";
import Color from "../../pieces/Color";
import Square from "./Square";
import * as Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import None from "../../pieces/none/None";


describe('<Square />', () => {

  Enzyme.configure({ adapter: new Adapter() })

  it('even  <Square />s are dark', () => {
    const data = {
      piece: new Pawn(Color.WHITE),
      selected: false
    }
    const wrapper = shallow(<Square col='0' row='0' data={data} onClick={(col, row) => {}} />);
    console.log(wrapper.debug())
    expect(wrapper.find("button").hasClass("dark")).toEqual(true);
    expect(wrapper.find("button").hasClass("light")).toEqual(false);
  });

  it('odd  <Square />s are light', () => {
    const data = {
      piece: new Pawn(Color.WHITE),
      selected: false
    }
    const wrapper = shallow(<Square col='0' row='1' data={data} onClick={(col, row) => {}} />);
    expect(wrapper.find("button").hasClass("dark")).toEqual(false);
    expect(wrapper.find("button").hasClass("light")).toEqual(true);
  });

  it('rendering of non-selected <Square />', () => {
    const data = {
      piece: new Pawn(Color.WHITE),
      selected: false
    }
    const wrapper = shallow(<Square col='0' row='0' data={data} onClick={(col, row) => {}} />);
    expect(wrapper.find("button").hasClass("selected")).toEqual(false);
  });

  it('rendering of selected <Square />', () => {
    const data = {
      piece: new Pawn(Color.WHITE),
      selected: true
    }
    const wrapper = shallow(<Square col='0' row='0' data={data} onClick={(col, row) => {}} />);
    expect(wrapper.find("button").hasClass("selected")).toEqual(true);
  });

  it('onClick on <Square /> works as expected', () => {
    const data = {
      piece: new Pawn(Color.WHITE),
      selected: false
    }
    const mockFn = jest.fn();
    const wrapper = shallow(<Square col={1} row={3} data={data} squareClicked={mockFn} />);
    expect(mockFn.mock.calls).toEqual([]);
    wrapper.find('button').simulate('click');
    expect(mockFn.mock.calls).toEqual([[1, 3]]);
  });

  it('<Square />s can have piece on them', () => {
    const data = {
      piece: new Pawn(Color.WHITE),
      selected: true
    }
    const wrapper = shallow(<Square col='0' row='0' data={data} onClick={(col, row) => {}} />);
    expect(wrapper.find('button').text()).toEqual("♙")
  });

  it('<Square />s can be empty', () => {
    const data = {
      piece: new None(),
      selected: true
    }
    const wrapper = shallow(<Square col='0' row='0' data={data} onClick={(col, row) => {}} />);
    expect(wrapper.find('button').text()).toEqual(" ")
  });




});