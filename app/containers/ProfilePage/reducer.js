/*
 * ProfileReducer
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
    GET_USERPROFILE,
    GET_USERPROFILE_SUCCESS,
    GET_USERPROFILE_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    username: '',
    loading: false,
    error: false,
    data: { results: false, },
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERPROFILE:
        return state
            .set('loading', true)
            .set('error', false)
            .set('username', action.username)
            .setIn(['data','results'], false);
    case GET_USERPROFILE_SUCCESS:
        return state
            .setIn(['data','results'], action.profile)
            .set('loading',false)
    case GET_USERPROFILE_ERROR:
        return state
            .set('loading',false)
            .set('error', action.error);            
    default:
        return state;
  }
}

export default profileReducer;
