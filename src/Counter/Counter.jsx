import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ currentIdx, allProps }) => (
    <p className={styles.counter}>{currentIdx}/{allProps}</p>);

Counter.propTypes = {
    currentIdx: PropTypes.number.isRequired,
    allProps: PropTypes.number.isRequired,
};

export default Counter;