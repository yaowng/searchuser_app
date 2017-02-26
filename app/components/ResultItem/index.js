import React from 'react';
import { Link } from 'react-router';

type Props = {
  username: string,
  imgUrl: string,
}

function ResultItem(props: Props) {
  return (
    <Link to={`/profile/${props.username}`} >
      <img src={`${props.imgUrl}`} alt={props.username} width={150} height={150} />
      <div>
        <p>{props.username}</p>
      </div>
    </Link>
  );
}

// used to make sure the data you receive is valid
ResultItem.PropTypes = {
  username: React.PropTypes.string,
  imgUrl: React.PropTypes.string,
};

export default ResultItem;
