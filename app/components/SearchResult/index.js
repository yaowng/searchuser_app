import React from 'react';
import ResultItem from 'components/ResultItem';

import Wrapper from './Wrapper';
import Ul from './Ul';
import Li from './Li';

function SearchResult({ loading, error, users }) {
  let content = (<div>Please search by username</div>);
  // const totalCount = users.total_count;
  if (error) {
    // empty
  }

  if (loading) {
    content = (<div>Loading...</div>);
  }

  if (users) {
    content = users.items.map((item, index) => (
      <Li key={`item-${index}`}>
        <ResultItem username={item.login} imgUrl={item.avatar_url} />
      </Li>
    ));
  }

  return (
    <div>
      <br />
      <Wrapper>
        <Ul id="list-searchresult">
          {content}
        </Ul>
      </Wrapper>
    </div>
  );
}

SearchResult.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.any,
  users: React.PropTypes.any,
};

export default SearchResult;
