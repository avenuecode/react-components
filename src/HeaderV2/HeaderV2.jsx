// @flow
import React from 'react';
import { Menu } from 'react-feather';
import HeaderTitleV2 from '../HeaderTitleV2';
import MenuPopover from '../MenuPopover';
import MenuPopoverSquare from '../MenuPopoverSquare';
import './style.scss';

type Props = {
  /** Header company name. */
  title: React.Element,
  /** Header company logo. */
  logo?: React.Element,
  /** Menu popover toggle button. This element/component should contain an onClick callback that
   * controls the open/close state of the popover. */
  /** Callback function for when hamburger menu icon is clicked. */
  onHamburgerMenuClick?: Function
};

const HeaderV2 = (props: Props) => {
  const { title, logo, onHamburgerMenuClick } = props;

  return (
    <div className="ac-header nav-wrapper">
      <div className="d-flex justify-content-between">
        <div>
          {onHamburgerMenuClick && (
            <Menu
              className="ac-header-navbar__hamburger-icon navbar-brand feather-24"
              onClick={onHamburgerMenuClick}
            />
          )}

          <HeaderTitleV2 text={title} logo={logo} />
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="ac-header-item ac-header-item-menu">
            <MenuPopoverSquare />
          </div>
          <div className="ac-header-item ac-header-item-notification">notf</div>
          <div className="ac-header-item ac-header-item-profile">profile</div>
        </div>
      </div>
      <div className="ac-header-division" />
    </div>
  );
};

HeaderV2.defaultProps = {
  logo: null,
  onHamburgerMenuClick: null
};

MenuPopover.displayName = 'HeaderV2';

export default HeaderV2;
