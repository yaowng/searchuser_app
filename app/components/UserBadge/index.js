import React from 'react';
import Wrapper from './Wrapper';

function UserBadge({ profile }) {
	return (
		<Wrapper>
      <img src={`${profile.avatar_url}`} width={200} height={200}/>
      <h2>{profile.name}</h2>
      <p>{profile.login}</p>
      <p>{profile.company}</p>
      <p>{profile.location}</p>
      <p>{profile.email}</p>
      <p>{profile.blog}</p>
    </Wrapper>
	);
}

export default UserBadge;