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
import * as types from './constants';
// import {
//     GET_USERPROFILE,
//     GET_USERPROFILE_SUCCESS,
//     GET_USERPROFILE_ERROR,
// } from './constants';

// The initial state of the App
const initialState = fromJS({
    username: '',
    loading: false,
    error: false,
    profileData: { profile: false, },
    reposData: { repositories: false, },
});

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERDATA:
        return state
            .set('loading', true)
            .set('error', false)
            .set('username', action.username)
            .setIn(['profileData','profile'], false)
            .setIn(['reposData','repositories'], false);
    case types.GET_USERPROFILE_SUCCESS:
        return state
            .setIn(['profileData','profile'], action.profile)
            .set('loading',false)
    case types.GET_USERREPOS_SUCCESS:
        return state
            .setIn(['reposData','repositories'], action.repos)
            .set('loading',false)            
    case types.GET_USERDATA_ERROR:
        return state
            .set('loading',false)
            .set('error', action.error);                        
    default:
        return state;
  }
}

export default profileReducer;
