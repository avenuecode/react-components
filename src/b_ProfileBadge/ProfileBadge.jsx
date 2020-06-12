// @flow
import * as React from 'react';
import Modal from '../Modal';
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
  handleClick: Function
};

const ProfileBadge = (props: Props) => {
  const {
    logo, picture, children, isOpen, handleClick
  } = props;
  return (
    <div>
      <div
        onKeyDown={handleClick}
        role="button"
        tabIndex={-1}
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
      <Modal isOpen={isOpen} contentLabel="Profile" onClose={handleClick}>
        {children}
      </Modal>
    </div>
  );
};

ProfileBadge.displayName = 'ProfileBadge (beta)';

export default ProfileBadge;
