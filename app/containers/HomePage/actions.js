/* Home Actions */

import {
    CHANGE_USERNAME,
    SEARCH_USERNAME,
    SEARCH_USERNAME_SUCCESS,
    SEARCH_USERNAME_ERROR,
} from './constants';

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function searchUsername() {
  return {
    type: SEARCH_USERNAME,
  };
}

export function searchSuccess(users, username) {
  return {
    type: SEARCH_USERNAME_SUCCESS,
    users,
    username,
  };
}

export function searchError(error) {
  return {
    type: SEARCH_USERNAME_ERROR,
    error,
  };
}
