import React from 'react';
import {mount, shallow} from 'enzyme'
import Pawn from "../../pieces/pawn/Pawn";
import Color from "../../pieces/Color";
import Square from "./Square";
import * as Enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';


describe('<Square />', () => {

  Enzyme.configure({ adapter: new Adapter() })

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
    const wrapper = shallow(<Square col={1} row={3} data={data} squareClicked={ mockFn } />);
    expect(mockFn.mock.calls).toEqual([]);
    wrapper.find('button').simulate('click');
    expect(mockFn.mock.calls).toEqual([[1, 3]]);
  });

});