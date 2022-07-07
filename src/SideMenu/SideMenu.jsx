import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import MenuItem, { MenuItemProps } from '../MenuItem/MenuItem';
import MenuSubItem from '../MenuSubItem/MenuSubItem';
import styles from './SideMenu.module.scss';

export type GroupProps = {
  title?: string,
  items: MenuItemProps[]
};

export type CollapsableGroupProps = {
  title?: string,
  icon: ReactNode,
  items: MenuItemProps[],
  isCollapsed?: boolean,
  onCollapsedChange: (groupProps: CollapsableGroupProps) => void
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
  groups?: (GroupProps | CollapsableGroupProps)[],
  themeName?: String,
  color?: PaletteColorSetName,
  classList?: string | Array<string>,
  order?: number,
  footer?: ReactNode
};

const SideMenu = ({
  groups,
  themeName,
  classList,
  menuButton,
  color,
  logoImage,
  footer
}: SideMenuProps) => {
  const renderGroup = ({ title, items }: GroupProps) => {
    return (
      <div
        className={classNames(styles.group, classList)}
        key={title.replace(/ /g, '-')}
      >
        <div className={classNames(styles.groupTitle, classList)}>{title}</div>
        {items
          ?.sort((a, b) => (a.order > b.order ? 1 : -1))
          .map(itemProps => (
            <MenuItem key={itemProps.label.replace(/ /g, '-')} {...itemProps} />
          ))}
      </div>
    );
  };

  const renderCollapsableGroup = (group: CollapsableGroupProps) => {
    const { title, items, icon, isCollapsed, onCollapsedChange } = group;

    const groupActive = items.some(item => item.active);

    return (
      <>
        <div className={styles.collapsableGroup} key={title.replace(/ /g, '-')}>
          <div
            className={classNames(
              styles.collapsableGroupHeader,
              groupActive ? styles.active : ''
            )}
            onClick={() => onCollapsedChange?.(group)}
          >
            <div
              className={classNames(
                styles.icon,
                groupActive ? styles.active : ''
              )}
            >
              {icon}
            </div>
            <div
              className={classNames(
                styles.collapsableGroupTitle,
                groupActive ? styles.active : ''
              )}
            >
              {title}
            </div>
          </div>
          <div
            className={classNames(
              styles.itemsContainer,
              isCollapsed ? styles.collapsed : styles.expanded
            )}
          >
            {items
              ?.sort((a, b) => (a.order > b.order ? 1 : -1))
              .map(itemProps => (
                <MenuSubItem
                  key={itemProps.label.replace(/ /g, '-')}
                  {...itemProps}
                />
              ))}
          </div>
        </div>
      </>
    );
  };

  return (
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
        {groups?.map(group => {
          return group?.onCollapsedChange
            ? renderCollapsableGroup(group)
            : renderGroup(group);
        })}

        <div className={classNames(styles.footer, classList)}>
          {footer || <>&nbsp;</>}
        </div>
      </div>
    </div>
  );
};

SideMenu.defaultProps = {
  groups: [
    {
      title: 'No categories',
      items: [{ path: '', title: 'No items', group: 'No categories' }]
    }
  ],
  classList: '',
  themeName: 'engage',
  color: 'inherit',
  order: 0,
  footer: undefined,
  logoImage: null,
  menuButton: undefined
};

export default SideMenu;
