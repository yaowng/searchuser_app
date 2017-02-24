/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectProfile = (state) => state.get('profile');

const makeSelectUsername = () => createSelector(
  selectProfile,
  (profileState) => profileState.get('username')
);

const makeSelectLoading = () => createSelector(
  selectProfile,
  (profileState) => profileState.get('loading')
);

const makeSelectError = () => createSelector(
  selectProfile,
  (profileState) => profileState.get('error')
);

const makeSelectProfile = () => createSelector(
  selectProfile,
  (profileState) => profileState.getIn(['data','results'])
);

export {
  selectProfile,
  makeSelectUsername,
  makeSelectLoading,
  makeSelectError,
  makeSelectProfile,
};
