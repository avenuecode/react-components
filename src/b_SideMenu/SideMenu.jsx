// @flow
import React from 'react';
import classNames from 'classnames';
import './style.scss';

type Props = {
  /** List of elements to be rendered inside menu. Those must have the following structure:
      {
      title: Category Title,
      items: List of items inside category:
        { id: Item Id, path: Router Path, name: Item Display Name }
      }
   */
  menuData?: list,
  classList?: string | Array<string>
};

class SideMenu extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentItem: props.menuData[0].items[0].id
    };
  }

  render() {
    const { menuData, classList } = this.props;

    return (
      <div className={classNames('ac-side-menu', classList)}>
        {menuData.map(category => (
          <div className={classNames('ac-side-menu-category', classList)} key={category.id}>
            <div className={classNames('ac-side-menu-category-title', classList)}>{category.title}</div>
            {category.items.map(item => (
              <div
                onKeyDown={() => {
                  this.setState({ currentItem: item.id });
                }}
                tabIndex={0}
                role="button"
                key={item.id}
                to={item.path}
                className={classNames(`ac-side-menu-item ${
                  this.state.currentItem === item.id ? 'active' : ''
                }`,classList)}
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
        <div className={classNames('ac-side-menu-end', classList)} />
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
