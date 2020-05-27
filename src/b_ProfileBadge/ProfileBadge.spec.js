import React from 'react';
import { shallow } from 'enzyme';
import ProfileBadge from './ProfileBadge';

describe('ProfileBadge', () => {
  const wrapper = props => shallow(<ProfileBadge {...props} />);
  const textString = '里îßPseudo language is preferred in tests里îß';
  const child = <strong>{textString}</strong>;

  test('it can take a react element', () => {
    expect(wrapper({ children: child })).toBeTruthy();
  });

  test('it can take a string', () => {
    const RenderedComponent = wrapper({ children: textString });
    expect(RenderedComponent.text()).toContain(textString);
  });
});
