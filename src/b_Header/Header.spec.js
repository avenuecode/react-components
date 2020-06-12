import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

const HEADER_TITLE_SELECTOR = '.ac-header-navbar__header-title';
const NAV_SELECTOR = '.ac-header-navbar__nav';
const NAV_ITEMS_SELECTOR = '.nav-item';
const HAMBURGER_ICON_SELECTOR = 'svg.ac-header-navbar__hamburger-icon';
const POPOVER_SELECTOR = '.ac-header-navbar__popover';

describe.only('Component', () => {
  const defaultProps = { title: 'AC Header' };
  const wrapper = mount(<Header {...defaultProps} />);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should contain a header title', () => {
    const headerTitle = defaultProps.title.split(' ').join('');
    expect(wrapper.find(HEADER_TITLE_SELECTOR).text()).toEqual(headerTitle);
  });

  it('should contain a nav list when passed in naviagtaion items', () => {
    const nav = [
      <a className="nav-link" href="#Opportunities">
        Opportunities
      </a>,
      <a className="nav-link" href="#Contacts">
        Contacts
      </a>,
      <a className="nav-link" href="#Accounts">
        Accounts
      </a>
    ];
    wrapper.setProps({ nav });

    expect(wrapper.find(NAV_SELECTOR)).toHaveLength(1);
    expect(wrapper.find(NAV_ITEMS_SELECTOR).length).toEqual(nav.length);
  });

  it('should contain a hamburger icon when passed in a hamburger icon callback function', () => {
    wrapper.setProps({ onHamburgerMenuClick: jest.fn() });
    expect(wrapper.find(HAMBURGER_ICON_SELECTOR)).toHaveLength(1);
  });

  it('should contain a menu popover when passed in popoverToggle and popoverContent', () => {
    const PopoverToggle = () => (
      <button
        type="button"
        className="ac-menu-popover__button nav-link btn btn-link rounded-circle text-white px-1"
        id="popover-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded
        onClick={jest.fn()}
      >
        Open
      </button>
    );

    wrapper.setProps({
      popoverToggle: <PopoverToggle />,
      popoverContent: <p className="dropdown-item text-white">Header Popover</p>
    });
    expect(wrapper.find(POPOVER_SELECTOR)).toHaveLength(1);
  });
});
