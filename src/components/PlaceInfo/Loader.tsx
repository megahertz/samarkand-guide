import React from 'react';
import styles from './Loader.module.css';

export default function Loader({ className = '' }: { className?: string }) {
  return (
    <div className={`${styles.loader} ${className}`}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
