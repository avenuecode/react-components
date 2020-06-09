// @flow
import React from 'react';
import './style.scss';

type Props = {
  /** Content displayed in popover when it's open */
  children: React.Element,
  isOpen?: boolean,
  onClick: Function,
  closeDotMenu: Function,
};

class SimplePopover extends React.Component <Props> {
  constructor(props: Props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.closeDotMenu();
    }
  }

  render() {
    const { isOpen, children, onClick } = this.props;
    return (
      <div
        ref={this.setWrapperRef}
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
  }
}

SimplePopover.defaultProps = {
  isOpen: false
};

SimplePopover.displayName = 'SimplePopover (beta)';

export default SimplePopover;
