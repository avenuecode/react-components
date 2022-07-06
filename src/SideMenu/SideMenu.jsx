import React, { ReactNode } from 'react';
import classNames from 'classnames';
import MenuItem, { MenuItemProps } from '../MenuItem/MenuItem';
import styles from './SideMenu.module.scss';

export type GroupProps = {
  title?: string,
  items: MenuItemProps[]
};

export type PaletteColorSetName =
  | 'inherit'
  | 'primary'
  | 'secundary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

export type SideMenuProps = {
  logoImage?: ReactNode,
  menuButton?: ReactNode,
  groups?: GroupProps[],
  renderItem?: (itemData: MenuItemProps) => ReactNode,
  themeName?: String,
  color?: PaletteColorSetName,
  classList?: string | Array<string>,
  order?: number,
  footer?: ReactNode
};

const SideMenu = ({
  groups,
  themeName,
  renderItem,
  classList,
  menuButton,
  color,
  logoImage,
  footer
}: SideMenuProps) => (
  <div
    className={classNames(
      styles.sideMenu,
      `${themeName ? styles[themeName] : ''}`,
      styles[color]
    )}
  >
    <div className={styles.logoContainer}>
      <div className={styles.logoImage}>{logoImage}</div>
      {menuButton ? (
        <div className={styles.menuButton}>{menuButton}</div>
      ) : null}
    </div>
    <hr className={styles.divisor} />
    <div className={styles.container}>
      {groups?.map(({ items, title }) => (
        <div
          className={classNames(styles.group, classList)}
          key={title.replace(/ /g, '-')}
        >
          <div className={classNames(styles.groupTitle, classList)}>
            {title}
          </div>
          {items
            ?.sort((a, b) => (a.order > b.order ? 1 : -1))
            .map(itemProps => (renderItem ? (
              renderItem(itemProps)
            ) : (
              <MenuItem
                key={itemProps.label.replace(/ /g, '-')}
                {...itemProps}
              />
            ))
            )}
        </div>
      ))}
      <div className={classNames(styles.footer, classList)}>
        {footer || <>&nbsp;</>}
      </div>
    </div>
  </div>
);

SideMenu.defaultProps = {
  groups: [
    {
      title: 'No categories',
      items: [{ path: '', title: 'No items', group: 'No categories' }]
    }
  ],
  renderItem: undefined,
  classList: '',
  themeName: 'engage',
  color: 'inherit',
  order: 0,
  footer: undefined,
  logoImage: null,
  menuButton: undefined
};

export default SideMenu;
