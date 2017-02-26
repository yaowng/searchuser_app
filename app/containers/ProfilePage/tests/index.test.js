import React from 'react';
import { shallow } from 'enzyme';
import { ProfilePage, mapDispatchToProps } from '../index';
import { getUserData } from '../actions';

describe('Container: <ProfilePage />', () => {
  const props = {
    loading: false,
    error: false,
    profile: [],
    onInit: () => {},
    username: '',
  };

  it('should render ProfilePage', () => {
    const renderedComponent = shallow(
      <ProfilePage {...props} />
    );
    expect(renderedComponent.length).toEqual(1);
  });

  describe('mapDispatchToProps', () => {
    describe('onInit', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onInit).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'tom';
        result.onInit(username);
        expect(dispatch).toHaveBeenCalledWith(getUserData(username));
      });
    });
  });
});
