// @flow
import React from 'react';
import './style.scss';

type Props = {
  /** Content displayed in popover when it's open */
  children: React.Element,
  isOpen?: boolean,
  onClick: Function
};

const SimplePopover = (props: Props) => {
  const { isOpen, children, onClick } = props;

  return (
    <div
      className="ac-simple-popover"
      hidden={!isOpen}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

SimplePopover.defaultProps = {
  isOpen: false
};

SimplePopover.displayName = 'SimplePopover (beta)';

export default SimplePopover;
