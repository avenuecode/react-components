// @flow
import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import './style.scss';

type Props = {
  /** Menu popover toggle button. This element/component should contain an onClick callback that
   * controls the open/close state of the popover. */
  toggle: React.Element,
  /** Boolean describing if the modal should be shown or not. */
  isOpen: boolean,
  /** Callback function invoked when popover focus is lost. */
  onClose: Function,
  /** Content displayed in popover when it's open  */
  children: React.Element,
  /** Additional classNames to add to the component wrapper. */
  classList?: string | Array<string>,
  /** Alignmnet of popover with respect to toggle button.
   * Accepted values are `left` and `right`. Default is `left`.  */
  alignment?: string
};

const MenuPopover = (props: Props) => {
  const {
    isOpen,
    onClose,
    classList,
    children,
    alignment,
    toggle,
    ...rest
  } = props;

  const wrapperEl = useRef(null);

  const handleBlur = (event) => {
    // currentTarget refers to this component.
    // relatedTarget refers to the element where the user clicked (or focused) which
    // triggered this event.
    // So in effect, this condition checks if the user clicked outside the component.
    if (!event.currentTarget.contains(event.relatedTarget)) {
      onClose();
    }
  };

  useEffect(() => {
    if (wrapperEl.current) {
      wrapperEl.current.focus();
    }
  });

  return (
    <div
      className={classNames(
        'ac-menu-popover menu-popover-wrapper btn-group',
        classList
      )}
      tabIndex={-1}
      ref={wrapperEl}
      onBlur={handleBlur}
      {...rest}
    >
      {toggle}

      {isOpen && children && (
        <div
          className={`ac-menu-popover__dropdown dropdown-menu d-block dropdown-menu-${alignment}`}
          aria-labelledby={toggle && wrapperEl.current.firstChild.id}
        >
          {
            <div
              className={`ac-menu-popover__arrow ac-menu-popover__arrow--${alignment}`}
            />
          }
          {children}
        </div>
      )}
    </div>
  );
};

MenuPopover.defaultProps = {
  classList: '',
  alignment: 'left'
};

MenuPopover.displayName = 'MenuPopover';

export default MenuPopover;
