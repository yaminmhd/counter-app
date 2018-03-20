import React from 'react';

const DownvoteButton = (props) => {
  return(
    <button onClick={props.downvote}>-</button>
  );
}

export default DownvoteButton