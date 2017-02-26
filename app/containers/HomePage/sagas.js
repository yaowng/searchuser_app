/**
 * Gets the repositories of the user from Github
 */
import request from 'utils/request';

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SEARCH_USERNAME } from './constants';
import { searchSuccess, searchError } from './actions';
import { makeSelectUsername } from './selectors';

/**
 * Github repos request/response handler
 */
export function* getUsers() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const requestURL = `https://api.github.com/search/users?q=${username}`;
  try {
    // Call our request helper (see 'utils/request')
    const users = yield call(request, requestURL);
    yield put(searchSuccess(users, username));
  } catch (err) {
    yield put(searchError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Watches for SEARCH_USERNAME actions and calls getUsers when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(SEARCH_USERNAME, getUsers);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  githubData,
];
