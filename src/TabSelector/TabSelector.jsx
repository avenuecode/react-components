import React from 'react';
import classNames from 'classnames';
import './TabSelector.scss';

type Props = {
  /** Array of React Component to load the `nav-items` inside `nav-tabs` element */
  tabItems: Array<React.Component>,
  /** Boolean to show or not the animation of tab transition. */
  hasTabTransitionAnimation?: Boolean,
  /** The desired variant: "engage" "ligth" */
  variant?: 'engage' | 'expand' | 'exceed',
};

const TabSelector = (props: Props) => {
  const { tabItems, hasTabTransitionAnimation, variant } = props;
  const hasTabItems = tabItems && tabItems.length > 0;
  let tabAnimationStyle = {};

  if (hasTabTransitionAnimation && hasTabItems) {
    const activeTab = tabItems.findIndex(
      tab => tab.props.className.indexOf('active') !== -1
    );
    const maxTransform = (tabItems.length - 1) * 100;
    const transformPosition = maxTransform - 100 * activeTab;
    const widthBar = 100 / tabItems.length;

    /**
     * The Style of tab Animation (current-segment) depends of the quantity of tab.
     * And it needs to know how the tab is activated.
     */
    tabAnimationStyle = {
      width: `${widthBar}%`,
      transform: `translateX(-${transformPosition}%)`
    };
  }

  const getVariant = () => {
    switch (variant) {
      case 'engage':
        return 'nav-tabs-engage';

      case 'exceed':
        return 'nav-tabs-exceed';

      default:
        return 'nav-tabs';
    }
  };

  return (
    <div
      className={classNames('ac-tab-selector', 'nav', 'position-relative', 'd-flex', 'justify-content-end', getVariant())}
      role="tablist"
    >
      {hasTabItems
        && tabItems.map(tabItem => (
          <div
            className="nav-item text-center text-uppercase"
            key={tabItem.key}
          >
            {tabItem}
          </div>
        ))}

      {hasTabTransitionAnimation && (
        <div className="current-segment" style={tabAnimationStyle} />
      )}
    </div>
  );
};

TabSelector.defaultProps = {
  hasTabTransitionAnimation: true,
  variant: 'expand'
};

export default TabSelector;
