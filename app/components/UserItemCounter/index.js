import React from 'react';
import Wrapper from './Wrapper';

function UserItemCounter({profile}) {
	return(
		<Wrapper>
          <p>
            <strong>Repositories:</strong> {profile.public_repos} ||  
            <strong>Followers:</strong> {profile.followers} || 
            <strong>Following:</strong> {profile.following}
          </p>
      </Wrapper>
	);
}

UserItemCounter.propTypes = {
	profile: React.PropTypes.oneOfType([
	    React.PropTypes.array,
	    React.PropTypes.bool,
    ]), 
};

export default UserItemCounter;