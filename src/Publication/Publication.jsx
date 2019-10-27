import React from 'react';
import styles from './Publication.module.css';

const Publication = ({ items }) => (
    <article className={styles.publication} id={items.id}>
        <h2>{items.title}</h2>
        <p>
            {items.text}
        </p>
    </article>
);

export default Publication;