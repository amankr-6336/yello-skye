import React from 'react';
import styles from './card.module.css';
import PropTypes from 'prop-types';

export default function Card({onClick,size ,pointer="",children, variant = 'default', padding = 'medium', shadow = 'small' }) {
  const className = `${styles.card} ${styles[size]} ${styles[pointer]} ${styles[variant]} ${styles[padding]} ${styles[shadow]} `;
  return <div onClick={onClick} className={className}>{children}</div>;
}

Card.propTypes = {
  onClick:PropTypes.func,
  children: PropTypes.node.isRequired,
  pointer:PropTypes.string,
  size:PropTypes.oneOf(['projectBox','contentBox','authBox']),
  variant: PropTypes.oneOf(['default', 'outlined']),
  padding: PropTypes.oneOf(['small', 'medium', 'large']),
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
};
