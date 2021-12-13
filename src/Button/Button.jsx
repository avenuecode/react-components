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
  /** Variants. */
  variant?: "engage" | "expand" | "exceed" | "secondary" | "tertiary" | "bordless",
};

const Button = (props: Props) => {
  const {
    classList,
    onClick,
    children,
    variant,
    ...rest
  } = props;

  const getVariant = () => {
    switch (variant) {
      case 'exceed':
        return 'button-exceed';

      case 'expand':
        return 'button-expand';

      case 'secondary':
        return 'btn-secondary';

      case 'tertiary':
        return 'button-tertiary';

      case 'bordless':
        return 'button-bordless';

      default:
        return 'btn-primary';
    }
  };

  return (
    <button
      type="button"
      className={classNames('btn', getVariant(), classList)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  classList: [],
  onClick: null,
  variant: 'engage',
};

Button.displayName = 'Button';

export default Button;
