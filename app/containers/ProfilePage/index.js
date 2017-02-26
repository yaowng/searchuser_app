import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import styled from 'styled-components';

import UserBadge from 'components/UserBadge';
import UserItemCounter from 'components/UserItemCounter';
import UserRepoList from 'components/UserRepoList';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getUserData } from './actions';
import {
  makeSelectProfile, makeSelectLoading, makeSelectError, makeSelectUsername,
  makeSelectRepos } from './selectors';

const Wrapper = styled.div`
  display: inline-grid;
  width: 100%;
`;
/* eslint react/prop-types: 0 */
export class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.onInit(this.props.params.username);
  }

  render() {
    const { loading, error, profile, repos } = this.props;
    let content = (<div></div>);
    let profileContent = (<div></div>);
    let totalContent = (<div></div>);
    let reposContent = (<div></div>);

    if (error) {
      // empty
    }

    if (profile) {
      profileContent = (<UserBadge profile={profile} />);
      totalContent = (<UserItemCounter profile={profile} />);
    }

    if (repos) {
      reposContent = (<UserRepoList repos={repos} />);
    }

    if (loading) {
      content = (<p>Loading...</p>);
    } else {
      content = (
        <Wrapper>
          {profileContent}
          {totalContent}
          {reposContent}
        </Wrapper>
      );
    }

    return (
      <div>
        <h1>Profile</h1>
        {content}
      </div>
    );
  }
}

ProfilePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.any,
  profile: React.PropTypes.any,
  // error: React.PropTypes.oneOfType([
  //   React.PropTypes.object,
  //   React.PropTypes.bool,
  // ]),
  // profile: React.PropTypes.oneOfType([
  //   React.PropTypes.array,
  //   React.PropTypes.bool,
  // ]),
  onInit: React.PropTypes.func,
  username: React.PropTypes.string,
};

ProfilePage.defaultProps = {
  username: '',
};

export function mapDispatchToProps(dispatch) {
  return {
    onInit: (username) => {
      dispatch(getUserData(username));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  username: makeSelectUsername(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
