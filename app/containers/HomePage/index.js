/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Header';
import SearchResult from 'components/SearchResult';
import { 
  searchUsername,
  changeUsername 
  } from './actions';
import { 
  makeSelectUsername,
  makeSelectCurrentUser,
  makeSelectUsers,
  makeSelectLoading,
  makeSelectError,
   } from './selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load users
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmit();
    }
  } 
 
 render() {
    const { loading, error, users } = this.props;
    const usersListProps = {
      loading,
      error,
      users,
    };
    //console.log(users);
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="username">
            <FormattedMessage {...messages.searchLabel} />
            <br/>
            <input
              id="username"
              type="text"
              placeholder="Search by username"
              value={this.props.username}
              onChange={this.props.onChangeUsername}
            />
          </label>
        </form>
        <SearchResult {...usersListProps} />
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  users: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmit: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmit: (e) => {
      if (e !== undefined && e.preventDefault) e.preventDefault();
      dispatch(searchUsername());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);