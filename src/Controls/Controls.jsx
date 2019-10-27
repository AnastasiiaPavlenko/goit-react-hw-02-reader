import React from 'react';
import styles from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement, disabled }) => (
    < section className={styles.controls}>
        <button disabled={disabled} type="button" className={styles.button} onClick={onDecrement}>Назад</button>
        <button type="button" className={styles.button} onClick={onIncrement}>Вперед</button>
    </section >
);

export default Controls;