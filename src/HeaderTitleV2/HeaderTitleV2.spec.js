import React from 'react';
import { mount } from 'enzyme';
import HeaderTitle from './HeaderTitleV2';

describe('Component', () => {
  const textString = 'Header Title';
  const wrapper = mount(<HeaderTitle text={textString} />);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render as h2', () => {
    expect(wrapper.find('h2')).toBeTruthy();
  });

  it('should have additional classNames when passed in a classList', () => {
    const classList = ['custom', 'custom-text'];

    wrapper.setProps({ classList });

    classList.forEach((className) => {
      expect(wrapper.find('h2').prop('className')).toContain(className);
    });
  });
});
