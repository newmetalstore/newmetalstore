import React from 'react';
import styles from './Button.module.css'

export interface ButtonProps {
  children?: React.ReactNode;
}

function Button({children }: ButtonProps) {
  return (
    <button className={styles.buttonWrapper}>
      {children}
    </button>
  );
}

export default Button;
