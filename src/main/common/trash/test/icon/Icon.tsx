import React from 'react';
import PropTypes from 'prop-types';

import './Icon.module.css';

const Icon:React.FC<any> = ({
  name, className, size, onClick, disabled, ...attrs
}) => {
  //@ts-ignore
  // const classes = classNames(
  //   'fa',
  //   `fa-${name}`,
  //   { func: onClick },
  //   { disabled },
  //   className,
  // );

  const elemSize = size ? { fontSize: `${size}rem` } : null;

  return (
    <i
      {...attrs}
      // className={classes}
      onClick={disabled ? null : onClick}
      style={elemSize}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  name: '',
  className: '',
  size: null,
  onClick: null,
  disabled: false,
};

export default Icon;
