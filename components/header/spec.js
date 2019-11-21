import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';



describe('Header Component', () => {
  let wrapper;
  let component;

  it('should render without errors', () => {
    component = shallow(<Header />)
    console.log(component)
    wrapper = component.find('.headerComponent')
    expect(wrapper.length).toBe(1);
  });

});
