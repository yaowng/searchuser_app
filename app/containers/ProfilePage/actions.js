/* Profile Actions */

import * as types from './constants';

// import {
//     GET_USERPROFILE,
//     GET_USERPROFILE_SUCCESS,
//     GET_USERPROFILE_ERROR,
// } from './constants';

export function getUserData(username) {
  return {
    type: types.GET_USERDATA,
    username,
  };
}

export function getUserDataError(error) {
  return {
    type: types.GET_USERDATA_ERROR,
    error,
  };
}

export function getUserProfileSuccess(profile) {
  return {
    type: types.GET_USERPROFILE_SUCCESS,
    profile,
  };
}

export function getUserReposSuccess(repos) {
  return {
    type: types.GET_USERREPOS_SUCCESS,
    repos,
  };
}
