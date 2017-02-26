import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import SearchForm from 'components/SearchForm';
import SearchResult from 'components/SearchResult';
import { shallow } from 'enzyme';
import { HomePage, mapDispatchToProps } from '../index';
import { changeUsername, searchUsername } from '../actions';

describe('Container: <HomePage />', () => {
  const props = {
    loading: false,
    error: false,
    onSubmit: () => {},
    onChangeUsername: () => {},
    username: '',
    users: [],
  };

  it('should render HomePage', () => {
    const renderedComponent = shallow(
      <HomePage {...props} />
    );
    expect(renderedComponent.length).toEqual(1);
  });

  it('should find SearchForm', () => {
    // const searchFormProps = {
    //   onSubmit: () => {},
    //   onChangeUsername: () => {},
    //   username: 'test',
    // };
    const renderedComponent = shallow(
      <HomePage {...props} />
    );
    expect(renderedComponent.find('SearchForm').length).toEqual(1);
  });

  it('should render SearchResult', () => {
    const searchResultProps = {
      loading: false,
      error: false,
      users: [],
    };
    const renderedComponent = shallow(
      <HomePage {...props} />
    );
    expect(renderedComponent.contains(<SearchResult {...searchResultProps} />)).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUsername).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'test';
        result.onChangeUsername({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
      });
    });
  });

  describe('onSubmit', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onSubmit).toBeDefined();
    });

    it('should dispatch searchUsername when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onSubmit();
      expect(dispatch).toHaveBeenCalledWith(searchUsername());
    });

    it('should preventDefault if called with event', () => {
      const preventDefault = jest.fn();
      const result = mapDispatchToProps(() => {});
      const evt = { preventDefault };
      result.onSubmit(evt);
      expect(preventDefault).toHaveBeenCalledWith();
    });
  });
});
