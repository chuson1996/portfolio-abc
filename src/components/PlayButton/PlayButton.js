import React from 'react';
import { Motion, spring } from 'react-motion';

export default function PlayButton({ hover, ...rest }) {
  return (
    <Motion style={{ offset: spring(hover ? 0 : 226) }}>
      {({ offset }) =>
        <svg width='82' height='103' viewBox='-232 6 82 103' xmlns='http://www.w3.org/2000/svg' {...rest}>
          <g id='Group' fill='none' fillRule='evenodd' transform='translate(-225 18)'
          stroke='#000'>
            <polygon id='small' points='0 40 0 0 62 39.5 0 79' />
            <polygon
              strokeDasharray={226}
              strokeDashoffset={offset}
              id='big'
              strokeWidth='13'
              points='0 40 0 0 62 39.5 0 79' />
          </g>
        </svg>
      }
    </Motion>
  );
}