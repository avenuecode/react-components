// @flow
import React from 'react';
import './style.scss';

type Props = {
  /** Content displayed in popover when it's open */
  children: React.Element,
  isOpen?: boolean
};

const SimplePopover = (props: Props) => {
  const { isOpen, children } = props;

  return (
    <div className="ac-simple-popover" hidden={!isOpen}>
      {children}
    </div>
  );
};

SimplePopover.defaultProps = {
  isOpen: false
};

SimplePopover.displayName = 'SimplePopover (beta)';

export default SimplePopover;
