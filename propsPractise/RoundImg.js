import React from 'react';
import PropTypes from 'prop-types';

function RoundImg(props)
{
  return(
    <img
    src={props.src}
    style={{borderRadius : props.borderRadius}}
    className="round-img"
    />
  )
  
}