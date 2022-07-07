import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './MenuSubItem.module.scss';
import ChevronRight from '../assets/chevron-right.svg';

export type MenuSubItemProps = {
  label: String,
  path: String,
  active?: String,
  onClick?: (itemProps: MenuSubItemProps) => void,
  className?: String
};

const MenuSubItem = (props: MenuSubItemProps) => {
  const { label, path, active, className, onClick } = props;
  return (
    <a
      href={path}
      className={classNames(
        className,
        styles.linkContainer,
        active ? styles.active : ''
      )}
      onClick={e => {
        if (onClick) {
          e.preventDefault();
          onClick(props);
        }
      }}
    >
      <div
        className={classNames(
          className,
          styles.label,
          active ? styles.active : ''
        )}
      >
        {label}
      </div>
      <div
        className={classNames(
          className,
          styles.icon,
          active ? styles.active : ''
        )}
      >
        <img src={ChevronRight} alt=">" />
      </div>
    </a>
  );
};

MenuSubItem.defaultProps = {
  active: false,
  onClick: undefined,
  className: ''
};

export default MenuSubItem;
