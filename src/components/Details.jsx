import React from 'react';

import styles from './Details.module.css';

function Details({ children }) {
    return (
        <div className={styles.Details}>
            {children}
        </div>
    );
}

Details.Row = function({ title, children }) {
    return (
        <div className={styles.Row}>
            <div className={styles.RowTitle}>{title}</div>
            <div>{children}</div>
        </div>
    );
}

export default Details;
