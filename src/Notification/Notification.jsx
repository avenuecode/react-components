// @flow
import React from 'react';
import Bell from '../assets/bell.svg';
import SimplePopover from '../SimplePopover';
import './style.scss';

type Props = {
  count?: integer,
  /** Content displayed in popover when it's open */
  children: React.Element,
  handleClick: Function,
  isOpen: boolean
};

const Notification = (props: Props) => {
  const {
    count, children, handleClick, isOpen
  } = props;

  return (
    <div
      className="ac-notification"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={-1}
    >
      <img
        className="ac-notification__symbol"
        src={Bell}
        alt="Avenue Code logo"
      />
      <div className="ac-notification__counter">{count}</div>
      <SimplePopover isOpen={isOpen}>{children}</SimplePopover>
    </div>
  );
};

Notification.defaultProps = {
  count: 0
};

Notification.displayName = 'Notification (beta)';

export default Notification;
