import React from 'react';

const UpvoteButton = (props) =>{
  return(
    <button onClick={props.handler}>+</button>
  );
}


export default UpvoteButton