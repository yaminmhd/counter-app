import React from 'react';

const DownvoteButton = (props) => {
  return(
    <button onClick={props.handler}>-</button>
  );
}

export default DownvoteButton