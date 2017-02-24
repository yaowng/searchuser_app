import React from 'react';
import Wrapper from './Wrapper';
import Ul from './Ul';
import Li from './Li';
import ResultItem from 'components/ResultItem';

function SearchResult({ loading, error, users }){
    let content = (<div></div>);
    let totalCount = users.total_count;
    console.log(loading);
    if (users){
        content = users.items.map((item, index)=>(
            <Li key={`item-${index}`}>
                <ResultItem 
                    username={item.login} 
                    imgUrl={item.avatar_url}/>
            </Li>
        ));
    }

    return(
        <div>
            <p>Total Users : {totalCount}</p>
            <Wrapper>
                <Ul>
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