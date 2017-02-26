import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from '../index';

describe('Component: <SearchForm />', () => {
  it('should render SearchForm', () => {
    const props = {
      onSubmit: () => {},
      onChangeUsername: () => {},
      username: '',
    };

    const renderedComponent = shallow(<SearchForm {...props} />);
    expect(renderedComponent.length).toEqual(1);
  });
});
