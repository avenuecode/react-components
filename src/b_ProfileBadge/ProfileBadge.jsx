// @flow
import * as React from 'react';
import Modal from '../Modal';
import MenuPopover from '../MenuPopover';
import './style.scss';

type Props = {
  /** Source uri of the logo image */
  logo: string,
  /** Source uri of the user image */
  picture: string,
  /** Content to be rendered inside modal */
  children: React.Element,
  /** Parameter to show or hide modal */
  isOpen: boolean,
  /** Callback function called when component is clicked */
  handleClick: Function,
  /** Controls wheter content will be popover instead of modal */
  isPopover?: boolean
};

const ProfileBadge = (props: Props) => {
  const {
    logo, picture, children, isOpen, handleClick, isPopover
  } = props;

  const buttonToggle = (
    <div
      role="button"
      tabIndex={-1}
      onKeyDown={handleClick}
      onClick={handleClick}
      className="ac-profile-badge"
    >
      <div>
        <img
          className="ac-profile-badge__logo"
          src={logo}
          alt="Company Logo"
        />
      </div>
      <div>
        <img
          className="ac-profile-badge__picture"
          src={picture}
          alt="Profile Avatar"
        />
      </div>
    </div>
  );

  if (isPopover) {
    return (
      <MenuPopover
        isOpen={isOpen}
        contentLabel="Profile"
        onClose={isOpen ? handleClick : () => {}}
        alignment="right"
        toggle={buttonToggle}
      >
        {children}
      </MenuPopover>
    );
  }

  return (
    <div>
      {buttonToggle}
      <Modal isOpen={isOpen} contentLabel="Profile" onClose={handleClick}>
        {children}
      </Modal>
    </div>
  );
};

ProfileBadge.defaultProps = {
  isPopover: false
};

ProfileBadge.displayName = 'ProfileBadge (beta)';

export default ProfileBadge;
