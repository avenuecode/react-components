// @flow
import React from 'react';
import classNames from 'classnames';

type Props = {
  /** String, or FormattedMessage to display as Button text. */
  children: React.Element,
  /** String className or Array of String classNames to add to the component. */
  classList?: string | Array<string>,
  /** Custom click event handler. */
  onClick?: Function,
};

const Button = (props: Props) => {
  const {
    classList,
    onClick,
    children,
    ...rest
  } = props;

  return (
    <button
      type="button"
      className={classNames('btn', classList)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  classList: ['btn-primary'],
  onClick: null,
};

Button.displayName = 'Button';

export default Button;
