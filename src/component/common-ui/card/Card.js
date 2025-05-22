import React from 'react';
import styles from './card.module.csss';
import PropTypes from 'prop-types';

export default function Card({ children, variant = 'default', padding = 'medium', shadow = 'small' }) {
  const className = `${styles.card} ${styles[variant]} ${styles[padding]} ${styles[shadow]}`;
  return <div className={className}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'outlined']),
  padding: PropTypes.oneOf(['small', 'medium', 'large']),
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
};
