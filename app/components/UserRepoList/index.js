import React from 'react';
import Wrapper from './Wrapper';
import Ul from './Ul';
import Li from './Li';

function UserRepoList({ repos }) {
  let content = null;

  if (repos) {
    content =
    repos.map((repo) => (
      <Li key={repo.id}>
        <a href={`${repo.html_url}`} target="_blank">{repo.name}</a>
        <p><em>{repo.description}</em></p>
        <hr />
      </Li>));
  }

  return (
    <Wrapper>
      <Ul>
        {content}
      </Ul>
    </Wrapper>
  );
}

UserRepoList.propTypes = {
  repos: React.PropTypes.array,
};

export default UserRepoList;
