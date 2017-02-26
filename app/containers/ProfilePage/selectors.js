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
  (profileState) => profileState.getIn(['profileData', 'profile'])
);

const makeSelectRepos = () => createSelector(
  selectProfile,
  (profileState) => profileState.getIn(['reposData', 'repositories'])
);

export {
  selectProfile,
  makeSelectUsername,
  makeSelectLoading,
  makeSelectError,
  makeSelectProfile,
  makeSelectRepos,
};
