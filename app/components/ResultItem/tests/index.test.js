import React from 'react';
import { shallow } from 'enzyme';
import ResultItem from '../index';

describe('Component: <ResultItem />', () => {
  const props = {
    username: 'test',
    imgUrl: 'http://test.jpg',
  };

  it('should render ResultItem', () => {
    const renderedComponent = shallow(<ResultItem />);
    expect(renderedComponent.length).toEqual(1);
  });

  it('should render Link', () => {
    const renderedComponent = shallow(<ResultItem />);
    expect(renderedComponent.find('Link').length).toEqual(1);
  });

  it('should have Link to "profile/test"', () => {
    const renderedComponent = shallow(<ResultItem {...props} />);
    expect(renderedComponent.find('Link').prop('to')).toEqual('/profile/test');
  });

  it('should display image from URL', () => {
    const renderedComponent = shallow(<ResultItem {...props} />);
    expect(renderedComponent.find('img').prop('src')).toEqual('http://test.jpg');
  });
});
