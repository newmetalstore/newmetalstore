import React from 'react';
import styles from './Button.module.css'

export interface ButtonProps {
  text?: string;           // optional, if you want to allow both `text` and `children`
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
