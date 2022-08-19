// @flow
import React from 'react';
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
  /** Elements to be rendered inside dots-menu popover. */
  dotsMenuChildren: React.Element,
  /** Elements to be rendered inside notification modal. */
  notificationContent: React.Element,
  /** Number of notifications */
  notificationCount: integer,
  /** Elements to be rendered inside profile modal. */
  profileContent: React.Element,
  /** Controls whether profile content will be popover instead of modal */
  isProfilePopover?: boolean,
  /**
   * Custom Header Items React Components to be rendered along side with preexisting Header Items
   */
  headerItems?: Array<React.Element>,
  leftContainer: Array<React.Element>
};

class Header extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isDotsMenuOpen: false,
      isNotificationsOpen: false,
      isProfileOpen: false
    };
  }

  render() {
    const {
      title,
      logo,
      profileLogo,
      profilePicture,
      onHamburgerMenuClick,
      dotsMenuChildren,
      notificationContent,
      notificationCount,
      profileContent,
      isProfilePopover,
      headerItems,
      leftContainer,
    } = this.props;

    const onDotsMenuClick = () => {
      this.setState(prevState => ({ isDotsMenuOpen: !prevState.isDotsMenuOpen }));
    };

    const closeDotMenu = () => {
      this.setState({ isDotsMenuOpen: false });
    };

    const onNotificationClick = () => {
      this.setState(prevState => ({ isNotificationsOpen: !prevState.isNotificationsOpen }));
    };

    const onProfileClick = () => {
      this.setState(prevState => ({ isProfileOpen: !prevState.isProfileOpen }));
    };

    return (
      <div className="ac-header nav-wrapper">
        <div className="d-flex justify-content-between ac-header-container">
          <div className="d-flex">
            {onHamburgerMenuClick && (
              <Menu
                className="ac-header-navbar__hamburger-icon navbar-brand feather-24"
                onClick={onHamburgerMenuClick}
              />
            )}

            <HeaderTitle text={title} logo={logo} />
            <div className="d-flex align-items-center mx-3">
              {leftContainer}
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="ac-header-item ac-header-item-menu">
              <DotsMenu
                isOpen={this.state.isDotsMenuOpen}
                handleClick={onDotsMenuClick}
                closeDotMenu={closeDotMenu}
              >
                {dotsMenuChildren}
              </DotsMenu>
            </div>
            <div className="ac-header-item ac-header-item-notification">
              <Notification
                count={notificationCount}
                isOpen={this.state.isNotificationsOpen}
                handleClick={onNotificationClick}
              >
                {notificationContent}
              </Notification>
            </div>
            {headerItems?.map((headerItemComponent, index) => (
              <div key={index.toString()} className="ac-header-item ac-header-item-action">
                {headerItemComponent}
              </div>
            ))}
            <div className="ac-header-item ac-header-item-profile">
              <ProfileBadge
                logo={profileLogo}
                picture={profilePicture}
                isOpen={this.state.isProfileOpen}
                handleClick={onProfileClick}
                isPopover={isProfilePopover}
              >
                {profileContent}
              </ProfileBadge>
            </div>
          </div>
        </div>
        <div className="ac-header-division" />
      </div>
    );
  }
}

Header.defaultProps = {
  logo: null,
  profileLogo: null,
  profilePicture: null,
  onHamburgerMenuClick: null,
  isProfilePopover: false,
  headerItems: []
};

Header.displayName = 'Header (beta)';

export default Header;
