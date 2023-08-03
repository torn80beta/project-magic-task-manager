import React from 'react';
import Icons from '../../images/svg/icons.svg';

const Icon = ({ id, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${Icons}#icon-${id}`} />
    </svg>
  );
};

export default Icon;
