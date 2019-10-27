import React from 'react';
import styles from './Counter.module.css';

const Counter = ({ currentIdx, allProps }) => (
    <p className={styles.counter}>{currentIdx}/{allProps}</p>);

export default Counter;