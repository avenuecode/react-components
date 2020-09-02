import React from 'react';
import { mount } from 'enzyme';
import ProfileBadge from './ProfileBadge';

const LOGO_SELECTOR = 'img.ac-profile-badge__logo';
const PICTURE_SELECTOR = 'img.ac-profile-badge__picture';
const PROFILE_BADGE_SELECTOR = '.ac-profile-badge';
const MODAL_SELECTOR = '.ac-profile-badge__modal';
const POPOVER_SELECTOR = '.ac-profile-badge__popover';

const content = '<div>Profile badge content</div>';
const defaultProps = {
  logo: 'logo.png',
  picture: 'picture.png',
  handleClick: jest.fn(),
  isOpen: false,
};

describe.each([
  [MODAL_SELECTOR, defaultProps],
  [POPOVER_SELECTOR, { ...defaultProps, isPopover: true }],
])('ProfileBadge %p', (menuSelector, props) => {
  const wrapper = mount(<ProfileBadge {...props}>{content}</ProfileBadge>);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render the given logo', () => {
    expect(wrapper.find(LOGO_SELECTOR).prop('src')).toEqual(defaultProps.logo);
  });

  it('should render the given picture', () => {
    expect(wrapper.find(PICTURE_SELECTOR).prop('src')).toEqual(defaultProps.picture);
  });

  it('should call handleCLick prop when clicking on ac-profile-badge', () => {
    wrapper.find(PROFILE_BADGE_SELECTOR).simulate('click');
    expect(wrapper.prop('handleClick')).toHaveBeenCalled();
  });

  it('should call handleCLick prop when keyDown on ac-profile-badge', () => {
    wrapper.find(PROFILE_BADGE_SELECTOR).simulate('keyDown');
    expect(wrapper.prop('handleClick')).toHaveBeenCalled();
  });

  it('should not render content when isOpen is false', () => {
    expect(wrapper.contains(content)).toBeFalsy();
  });

  it(`should render ${menuSelector} menu container`, () => {
    expect(wrapper.exists(menuSelector)).toBeTruthy();
  });

  it('should render content when is open is true', () => {
    wrapper.setProps({ isOpen: true });
    wrapper.update();

    expect(wrapper.contains(content)).toBeTruthy();
  });
});
