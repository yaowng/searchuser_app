import React from 'react';
import { Link } from 'react-router';

function ResultItem(props){
    return (
        <Link to={'profile/' + props.username} >
            <img src={`${props.imgUrl}`} width={150} height={150}/>
            <div>
                <p>{props.username}</p>
            </div>
        </Link>
    );
}

//used to make sure the data you receive is valid
ResultItem.PropTypes = {
    username: React.PropTypes.string.isRequired,
    imgUrl: React.PropTypes.string.isRequired,
};

export default ResultItem;