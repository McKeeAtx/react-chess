import React from 'react';
import * as Enzyme from 'enzyme'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Label from "../label/Label";

describe('<Label />', () => {

  Enzyme.configure({ adapter: new Adapter() })

  it('each <Label /> renders a text', () => {
    const wrapper = shallow(<Label title={1} />);
    expect(wrapper.find('span').text()).toEqual("1");
  });

});