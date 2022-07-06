import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './MenuItem.module.scss';

export type MenuItemProps = {
  icon?: ReactNode,
  label: String,
  path: String,
  active?: String,
  onClick?: (itemProps: MenuItemProps) => void,
  className?: String
};

const MenuItem = (props: MenuItemProps) => {
  const {
    icon, label, path, active, className, onClick
  } = props;
  return (
    <a
      href={path}
      className={classNames(
        className,
        styles.linkContainer,
        active ? styles.active : ''
      )}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick(props);
        }
      }}
    >
      <div
        className={classNames(
          className,
          styles.icon,
          active ? styles.active : ''
        )}
      >
        {icon}
      </div>
      <div
        className={classNames(
          className,
          styles.label,
          active ? styles.active : ''
        )}
      >
        {label}
      </div>
    </a>
  );
};
// <div
//   tabIndex={0}
//   role="button"
//   key={label.replace(/ /g, '-')}
//   to={path}
//   className={classNames(styles['ac-menu-item'], active ? styles.active : '')}
// >

// </div>

MenuItem.defaultProps = {
  icon: null,
  active: false,
  onClick: undefined,
  className: ''
};

export default MenuItem;
