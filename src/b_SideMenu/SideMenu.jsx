// @flow
import React from 'react';
import './style.scss';

type Props = {
  /** List of elements to be rendered inside menu. Those must have the following structure:
      {
      title: Category Title,
      items: List of items inside category:
        { id: Item Id, path: Router Path, name: Item Display Name }
      }
   */
  menuData?: list
};

class SideMenu extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentItem: props.menuData[0].items[0].id
    };
  }

  render() {
    const { menuData } = this.props;

    return (
      <div className="ac-side-menu">
        {menuData.map(category => (
          <div className="ac-side-menu-category" key={category.id}>
            <div className="ac-side-menu-category-title">{category.title}</div>
            {category.items.map(item => (
              <div
                onKeyDown={() => {
                  this.setState({ currentItem: item.id });
                }}
                tabIndex={0}
                role="button"
                key={item.id}
                to={item.path}
                className={`ac-side-menu-item ${
                  this.state.currentItem === item.id ? 'active' : ''
                }`}
                onClick={() => {
                  this.setState({ currentItem: item.id });
                }}
              >
                {item.icon}
                {item.linkComponent}
              </div>
            ))}
          </div>
        ))}
        <div className="ac-side-menu-end" />
      </div>
    );
  }
}

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
