import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.css';

export default function Input({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  size = 'medium',
}) {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${styles[size]} ${error ? styles.errorInput : ''}`}
      />
      {/* {error && <span className={styles.error}>{error}</span>} */}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
