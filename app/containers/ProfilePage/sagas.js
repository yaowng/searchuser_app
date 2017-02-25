/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_USERDATA } from './constants';
import { 
  getUserProfileSuccess, 
  getUserReposSuccess,
  getUserDataError } from './actions';

import request from 'utils/request';
import { makeSelectUsername } from './selectors';

/**
 * Github user profile request/response handler
 */
export function* getData() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  //const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const requestProfileURL = `https://api.github.com/users/${username}`;
  const requestReposURL = `https://api.github.com/users/${username}/repos`;

  try {
    console.log(requestProfileURL);
    console.log(requestReposURL);
    // Call our request helper (see 'utils/request')
    const profile = yield call(request, requestProfileURL);
    const repos = yield call(request, requestReposURL);

    yield [
      put(getUserProfileSuccess(profile)),
      put(getUserReposSuccess(repos)),
    ];
  } catch (err) {
    yield put(getUserDataError(err));
  }
}

/**
 * Github user repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  //const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const requestURL = `https://api.github.com/users/${username}/repos`;
  try {
    console.log(requestURL);
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(getUserReposSuccess(repos));
  } catch (err) {
    yield put(getUserReposError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubUserData() {
  // Watches for SEARCH_USERNAME actions and calls getUsers when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(GET_USERDATA, getData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  githubUserData,
];
