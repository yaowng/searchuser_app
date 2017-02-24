import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  getUserProfile,
  } from './actions';
import { 
  makeSelectProfile,
  makeSelectLoading,
  makeSelectError,
  makeSelectUsername,
   } from './selectors';

export class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount() {
    this.props.onInit(this.props.params.username);
  }
  
  render() {
    const { loading, error, profile, username } = this.props;
    console.log(profile);
    return (
      <div>
        <h1>Profile</h1>
        <h2>{username}</h2>
        <img src={`${profile.avatar_url}`} width={150} height={150}/>
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
      dispatch(getUserProfile(username));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  username: makeSelectUsername(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);