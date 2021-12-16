// @flow
import React from 'react';
import classNames from 'classnames';

type Props = {
  /** List of elements to be rendered inside menu. Those must have the following structure:
      {
      title: Category Title,
      items: List of items inside category:
        { id: Item Id, path: Router Path, name: Item Display Name }
      }
   */
  menuData?: any[],
  classList?: string | Array<string>,
  currentItem: String,
  setCurrentItem: (id: string) => void,
};

const SideMenu = ({
  menuData, classList, setCurrentItem, currentItem
}: Props) => (
  <div className={classNames('ac-side-menu', classList)}>
    {menuData.map(category => (
      <div className={classNames('ac-side-menu-category', classList)} key={category.id}>
        <div className={classNames('ac-side-menu-category-title', classList)}>{category.title}</div>
        {category.items.map(item => (
          <div
            onKeyDown={() => {
              setCurrentItem(item.id);
            }}
            tabIndex={0}
            role="button"
            key={item.id}
            to={item.path}
            className={classNames('ac-side-menu-item', { active: currentItem === item.id }, classList)}
            onClick={() => {
              setCurrentItem(item.id);
            }}
          >
            {item.icon}
            {item.linkComponent}
          </div>
        ))}
      </div>
    ))}
    <div className={classNames('ac-side-menu-end', classList)} />
  </div>
);

SideMenu.defaultProps = {
  menuData: [
    {
      title: 'No categories',
      items: [{ id: 'NO_ITEM', path: '', name: 'No Items' }]
    }
  ],
  classList: [],
  currentItem: [],
  setCurrentItem: () => {}
};

export default SideMenu;
