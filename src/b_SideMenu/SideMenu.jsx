// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

type Props = {
  menuData?: list
};

const SideMenu = (props: Props) => {
  const { menuData } = props;

  const [currentItem, setCurrentItem] = useState(menuData[0].items[0].id);

  return (
    <div className="ac-side-menu">
      {menuData.map(category => (
        <div className="ac-side-menu-category" key={category.id}>
          <div className="ac-side-menu-category-title">{category.title}</div>
          {category.items.map(item => (
            <Link
              key={item.id}
              to={item.path}
              className={`ac-side-menu-item ${
                currentItem === item.id ? 'active' : ''
              }`}
              onClick={() => {
                setCurrentItem(item.id);
              }}
            >
              {item.icon}
              <div className="ac-side-menu-item-text">{item.name}</div>
            </Link>
          ))}
        </div>
      ))}
      <div className="ac-side-menu-end" />
    </div>
  );
};

SideMenu.defaultProps = {
  menuData: [
    {
      title: 'No categories',
      items: [{ id: 'NO_ITEM', path: '', name: 'No Items' }]
    }
  ]
};

SideMenu.displayName = 'SideMenu (beta)';

export default SideMenu;
