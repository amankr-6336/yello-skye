import React from 'react';
import styles from './buttton.module.css';
import PropTypes from 'prop-types';

export default function Button({ type = 'primary', size = 'medium', children, onClick, disabled = false }) {
  const className = `${styles.button} ${styles[type]} ${styles[size]}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
