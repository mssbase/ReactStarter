import React from 'react';
import styles from './Button.scss';
import {string} from 'prop-types';

const Button = ({variant = '', ...otherProps}) => (
  <button 
    {...otherProps} 
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  />
);

Button.propTypes = {
  variant: string,
};

export default Button;
