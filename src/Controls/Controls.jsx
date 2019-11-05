import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement, firstElement, lastElement }) => (
    < section className={styles.controls}>
        <button disabled={firstElement} type="button" className={styles.button} onClick={onDecrement}>Назад</button>
        <button disabled={lastElement} type="button" className={styles.button} onClick={onIncrement}>Вперед</button>
    </section >
);

Controls.propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    firstElement: PropTypes.bool.isRequired,
    lastElement: PropTypes.bool.isRequired,
};

export default Controls;