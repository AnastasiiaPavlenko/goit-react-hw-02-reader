import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement, index }) => (
    < section className={styles.controls}>
        <button disabled={(index === 0) ? true : false} type="button" className={styles.button} onClick={onDecrement}>Назад</button>
        <button disabled={(index === index.length - 1) ? true : false} type="button" className={styles.button} onClick={onIncrement}>Вперед</button>
    </section >
);

Controls.propTypes = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default Controls;