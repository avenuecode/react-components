// @flow
import * as React from 'react';
import Bell from '../assets/bell.svg';
import './style.scss';

type Props = {
  count?: integer
};

const Notification = (props: Props) => {
  const { count } = props;

  return (
    <div className="ac-notification">
      <img
        className="ac-notification__symbol"
        src={Bell}
        alt="Avenue Code logo"
      />
      <div className="ac-notification__counter">{count}</div>
    </div>
  );
};

Notification.defaultProps = {
  count: 0
};

export default Notification;
