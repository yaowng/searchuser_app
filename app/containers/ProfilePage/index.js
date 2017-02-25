import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  getUserData,
  } from './actions';
import { 
  makeSelectProfile,
  makeSelectLoading,
  makeSelectError,
  makeSelectUsername,
  makeSelectRepos,
   } from './selectors';

export class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount() {
    this.props.onInit(this.props.params.username);
  }
  
  render() {
    const { loading, error, profile, repos, username } = this.props;
    console.log(repos);
    let content = (<div></div>);

    if (repos){
      content = repos.map((repo, key) => (
                          <li key={repo.id}>
                            <p>{repo.name}</p>
                          </li>));
    }

    return (
      <div>
        <h1>Profile</h1>
        <img src={`${profile.avatar_url}`} width={150} height={150}/>
        <h2>{profile.name}</h2>
        <p>{profile.login}</p>
        <p>{profile.company}</p>
        <p>{profile.location}</p>
        <p>{profile.email}</p>
        <p>{profile.blog}</p>
        <p>{profile.public_repos}</p>
        <p>{profile.followers}</p>
        <p>{profile.following}</p>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  // profile: React.PropTypes.oneOfType([
  //   React.PropTypes.array,
  //   React.PropTypes.bool,
  // ]),  
  onInit: React.PropTypes.func,
  username: React.PropTypes.string,
};

ProfilePage.defaultProps = {
  username: '',
}

export function mapDispatchToProps(dispatch) {
  return {
    onInit: (username) => {
      // if (e !== undefined && e.preventDefault) e.preventDefault();
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