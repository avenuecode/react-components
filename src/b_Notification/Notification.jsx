// @flow
import React from 'react';
import Bell from '../assets/bell.svg';
import Modal from '../Modal';
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
  // const classes = ['custom', 'custom-modal'];
  // const ariaAttributes = {
  //   describedby: 'description'
  // };

  return (
    <div className="ac-notification">
      <div
        onKeyDown={handleClick}
        role="button"
        tabIndex={-1}
        onClick={handleClick}
        className="ac-notification__symbol"
      >
        <img src={Bell} alt="Avenue Code logo" />
        <div className="ac-notification__counter">{count}</div>
      </div>
      <Modal isOpen={isOpen} contentLabel="Notifications" onClose={handleClick}>
        {children}
      </Modal>
    </div>
  );
};

Notification.defaultProps = {
  count: 0
};

Notification.displayName = 'Notification (beta)';

export default Notification;
