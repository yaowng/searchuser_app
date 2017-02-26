import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('Component: <Header />', () => {
  it('should render div', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.length).toEqual(1);
  });

  it('should render text "Github User Search"', () => {
    const headerText = 'Github User Search';
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.contains(headerText)).toEqual(true);
  });
});
