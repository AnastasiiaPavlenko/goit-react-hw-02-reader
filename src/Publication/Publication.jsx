import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ items, index }) => (
    <article className={styles.publication} id={items.id}>
        <h2>{index}. {items.title}</h2>
        <p>
            {items.text}
        </p>
    </article>
);

Publication.propTypes = {
    items: PropTypes.object.isRequired,
};

export default Publication;