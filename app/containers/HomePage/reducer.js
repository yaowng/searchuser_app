/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
  SEARCH_USERNAME,
  SEARCH_USERNAME_SUCCESS,
  SEARCH_USERNAME_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  loading: false,
  error: false,
  currentUser: false,
  data: { results: false, },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        return state
        .set('username', action.username.replace(/@/gi, ''));
    case SEARCH_USERNAME:
        return state
            .set('loading', true)
            .set('error', false)
            .setIn(['data','results'], false);
    case SEARCH_USERNAME_SUCCESS:
        return state
            .setIn(['data','results'], action.users)
            .set('loading',false)
            .set('currentUser', action.username);
    case SEARCH_USERNAME_ERROR:
        return state
            .set('loading',false)
            .set('error', action.error);            
    default:
        return state;
  }
}

export default homeReducer;
