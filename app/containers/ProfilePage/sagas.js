/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_USERPROFILE } from './constants';
import { getUserProfileSuccess, getUserProfileError } from './actions';

import request from 'utils/request';
import { makeSelectUsername } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getProfile() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  //const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const requestURL = `https://api.github.com/users/${username}`;
  try {
    console.log(requestURL);
    // Call our request helper (see 'utils/request')
    const profile = yield call(request, requestURL);
    yield put(getUserProfileSuccess(profile));
  } catch (err) {
    yield put(getUserProfileError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Watches for SEARCH_USERNAME actions and calls getUsers when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(GET_USERPROFILE, getProfile);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  githubData,
];
