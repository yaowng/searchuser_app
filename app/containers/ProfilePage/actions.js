/* Profile Actions */

import {
    GET_USERPROFILE,
    GET_USERPROFILE_SUCCESS,
    GET_USERPROFILE_ERROR,
} from './constants';

export function getUserProfile(username) {
    return {
        type: GET_USERPROFILE,
        username,
    };
}

export function getUserProfileSuccess(profile) {
    return {
        type: GET_USERPROFILE_SUCCESS,
        profile,
    };
}

export function getUserProfileError(error) {
    return {
        type: GET_USERPROFILE_ERROR,
        error,
    }
}