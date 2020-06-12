// @flow
import React from 'react';
import './style.scss';

type Props = {
  /** Header company name. */
  text: React.Element,
  /** Header company logo. */
  logo: React.Element
};

const HeaderTitleV2 = (props: Props) => {
  const { text, logo } = props;

  return (
    <div className="ac-header-title">
      {logo}
      {text}
    </div>
  );
};

HeaderTitleV2.displayName = 'HeaderTitle (beta)';

export default HeaderTitleV2;
