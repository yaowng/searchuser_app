/*
 * ProfileConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_USERDATA = 'search-app/Profile/GET_USERDATA';
export const GET_USERDATA_ERROR = 'search-app/Profile/GET_USERDATA';
export const GET_USERPROFILE_SUCCESS = 'search-app/Profile/GET_USERPROFILE_SUCCESS';
export const GET_USERREPOS = 'search-app/Profile/GET_USERREPOS';
export const GET_USERREPOS_SUCCESS = 'search-app/Profile/GET_USERREPOS_SUCCESS';
