// @flow
import React from 'react';
import SimplePopover from '../b_SimplePopover';
import './style.scss';

type Props = {
  /** Content displayed in popover when it's open */
  children: React.Element,
  handleClick: Function,
  isOpen: boolean
};

const DotsMenu = (props: Props) => {
  const { children, handleClick, isOpen } = props;

  return (
    <div className="ac-dots-menu">
      <div
        className="d-flex justify-content-around ac-dots-menu-button"
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        tabIndex={0}
      >
        <div className="d-flex flex-column justify-content-around">
          <div className="ac-dots-menu-square" />
          <div className="ac-dots-menu-square" />
          <div className="ac-dots-menu-square" />
        </div>
        <div className="d-flex flex-column justify-content-around">
          <div className="ac-dots-menu-square" />
          <div className="ac-dots-menu-square" />
          <div className="ac-dots-menu-square" />
        </div>
        <div className="d-flex flex-column justify-content-around">
          <div className="ac-dots-menu-square" />
          <div className="ac-dots-menu-square" />
          <div className="ac-dots-menu-square" />
        </div>
      </div>
      <SimplePopover isOpen={isOpen} onClick={handleClick}>{children}</SimplePopover>
    </div>
  );
};

DotsMenu.displayName = 'DotsMenu (beta)';

export default DotsMenu;
