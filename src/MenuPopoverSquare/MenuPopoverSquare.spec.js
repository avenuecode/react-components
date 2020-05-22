import React from 'react';
import { shallow } from 'enzyme';
import MenuPopoverSquare from './MenuPopoverSquare';

describe('MenuPopoverSquare', () => {
  const wrapper = props => shallow(<MenuPopoverSquare {...props} />);
  const textString = 'Pseudo language is preferred in tests';
  const child = <strong>{textString}</strong>;

  test('it can take a react element', () => {
    expect(wrapper({ children: child })).toBeTruthy();
  });

  test('it can take a string', () => {
    const RenderedComponent = wrapper({ children: textString });
    expect(RenderedComponent.text()).toContain(textString);
  });
});
