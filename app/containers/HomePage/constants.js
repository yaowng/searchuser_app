/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'search-app/Home/CHANGE_USERNAME';
export const SEARCH_USERNAME = 'search-app/Home/SEARCH_USERNAME';
export const SEARCH_USERNAME_SUCCESS = 'search-app/Home/SEARCH_USERNAME_SUCCESS';
export const SEARCH_USERNAME_ERROR = 'search-app/Home/SEARCH_USERNAME_ERROR';
