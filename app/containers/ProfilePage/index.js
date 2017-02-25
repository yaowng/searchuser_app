import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
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

const Wrapper = styled.div`
  display: inline-grid;
  width: 100%;
`;

const Div = styled.div`
  white-space: no-wrap;
  overflow: hidden;
`;

const DivRepo = styled.div`
  float: left;
  width: 80%;
  height: 500px;
  overflow: auto;
  border: 1px solid black;
`;

const DivProfile = styled.div`
  float: left;
  width: 20%;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  margin: 5px;
`;

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
                          <Li key={repo.id}>
                            <a href={`${repo.html_url}`} target="_blank">{repo.name}</a>
                            <p><em>{repo.description}</em></p>
                            <hr/>
                          </Li>));
    }

    return (
      <div>
        <h1>Profile</h1>
        <Wrapper>
          <DivProfile>
            <img src={`${profile.avatar_url}`} width={200} height={200}/>
            <h2>{profile.name}</h2>
            <p>{profile.login}</p>
            <p>{profile.company}</p>
            <p>{profile.location}</p>
            <p>{profile.email}</p>
            <p>{profile.blog}</p>
          </DivProfile>
          <Div>
            <p>
              <strong>Repositories:</strong> {profile.public_repos} || 
              <strong>Followers:</strong> {profile.followers} || 
              <strong>Following:</strong> {profile.following}
            </p>
          </Div>
          <DivRepo>
            <Ul>
              {content}
            </Ul>
          </DivRepo>
        </Wrapper>
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