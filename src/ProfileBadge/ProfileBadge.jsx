// @flow
import * as React from 'react';
import './style.scss';

type Props = {
  logo: string,
  picture: string
};

const ProfileBadge = (props: Props) => {
  const { logo, picture } = props;
  return (
    <div className="ac-profile-badge">
      <div>
        <img className="ac-profile-badge__logo" src={logo} alt="Company Logo" />
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
};

ProfileBadge.displayName = 'ProfileBadge (beta)';

export default ProfileBadge;
