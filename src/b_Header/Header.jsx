// @flow
import React, { useState } from 'react';
import { Menu } from 'react-feather';
import HeaderTitle from '../b_HeaderTitle';
import DotsMenu from '../b_DotsMenu';
import Notification from '../b_Notification';
import ProfileBadge from '../b_ProfileBadge';
import './style.scss';

type Props = {
  /** Header company name. */
  title: React.Element,
  /** Header company logo. */
  logo?: React.Element,
  /** Header profile logo. */
  profileLogo?: string,
  /** Header profile picture. */
  profilePicture?: string,
  /** Menu popover toggle button. This element/component should contain an onClick callback that
   * controls the open/close state of the popover. */
  /** Callback function for when hamburger menu icon is clicked. */
  onHamburgerMenuClick?: Function,
  dotsMenuChildren: React.Element,
  notificationContent: React.Element,
  profileContent: React.Element
};

const Header = (props: Props) => {
  const {
    title,
    logo,
    profileLogo,
    profilePicture,
    onHamburgerMenuClick,
    dotsMenuChildren,
    notificationContent,
    profileContent
  } = props;

  const [isDotsMenuOpen, setDotsMenuOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const handleDotsMenuClick = () => setDotsMenuOpen(!isDotsMenuOpen);

  const handleNotificationsClick = () => setNotificationsOpen(!isNotificationsOpen);
  const handleProfileClick = () => setProfileOpen(!isProfileOpen);

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

          <HeaderTitle text={title} logo={logo} />
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="ac-header-item ac-header-item-menu">
            <DotsMenu isOpen={isDotsMenuOpen} handleClick={handleDotsMenuClick}>
              {dotsMenuChildren}
            </DotsMenu>
          </div>
          <div className="ac-header-item ac-header-item-notification">
            <Notification
              count={5}
              isOpen={isNotificationsOpen}
              handleClick={handleNotificationsClick}
            >
              {notificationContent}
            </Notification>
          </div>
          <div className="ac-header-item ac-header-item-profile">
            <ProfileBadge
              logo={profileLogo}
              picture={profilePicture}
              isOpen={isProfileOpen}
              handleClick={handleProfileClick}
            >
              {profileContent}
            </ProfileBadge>
          </div>
        </div>
      </div>
      <div className="ac-header-division" />
    </div>
  );
};

Header.defaultProps = {
  logo: null,
  profileLogo: null,
  profilePicture: null,
  onHamburgerMenuClick: null
};

Header.displayName = 'Header (beta)';

export default Header;
