import React from 'react';

import styles from './Details.module.css';
import {FormattedMessage} from "react-intl";

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
            <div className={styles.RowTitle}>
             <FormattedMessage
               id={title}
               defaultMessage={'???'}
             />
            </div>
            <div>{children}</div>
        </div>
    );
}

export default Details;
