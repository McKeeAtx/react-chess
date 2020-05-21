import React from 'react';
import * as Enzyme from 'enzyme'
import {shallow} from 'enzyme'
import Pawn from "../../model/pieces/pawn/Pawn";
import {Square} from "./Square";
import {default as _Square} from "../../model/Square";
import Adapter from 'enzyme-adapter-react-16';
import None from "../../model/pieces/none/None";


describe('the <Square /> component', () => {

  Enzyme.configure({ adapter: new Adapter() })

  it('is dark if the square is even', () => {
    const wrapper = shallow(<Square col='0' row='0' piece={None.INSTANCE} />);
    expect(wrapper.find("button").hasClass("dark")).toEqual(true);
    expect(wrapper.find("button").hasClass("light")).toEqual(false);
  });

  it('is light if the square is odd', () => {
    const wrapper = shallow(<Square col='0' row='1' piece={None.INSTANCE} />);
    expect(wrapper.find("button").hasClass("dark")).toEqual(false);
    expect(wrapper.find("button").hasClass("light")).toEqual(true);
  });

  it('has not the selected class if it is not selected', () => {
    const wrapper = shallow(<Square col='0' row='0' piece={Pawn.WHITE} selected={false} />);
    expect(wrapper.find("button").hasClass("selected")).toEqual(false);
  });

  it('has the selected class if it is selected', () => {
    const wrapper = shallow(<Square col='0' row='0' piece={Pawn.WHITE} selected={true} />);
    expect(wrapper.find("button").hasClass("selected")).toEqual(true);
  });

  it('calls squareClicked when it is clicked', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Square col={1} row={3} piece={None.INSTANCE} squareClicked={mockFn} />);
    expect(mockFn.mock.calls).toEqual([]);
    wrapper.find('button').simulate('click');
    expect(mockFn.mock.calls).toEqual([[_Square.of(1, 3)]]);
  });

  it('can have a piece', () => {
    const wrapper = shallow(<Square col='0' row='0' piece={Pawn.WHITE}  />);
    expect(wrapper.find('button').text()).toEqual("♙")
  });

  it('<Square />s can be empty', () => {
    const wrapper = shallow(<Square col='0' row='0' piece={None.INSTANCE} />);
    expect(wrapper.find('button').text()).toEqual(" ")
  });

  it('<Square />s can be highlighted', () => {
    const wrapper = shallow(<Square col='0' row='0' piece={Pawn.WHITE} highlighted={true} />);
    expect(wrapper.find("button").hasClass("highlighted")).toEqual(true);
  });

});