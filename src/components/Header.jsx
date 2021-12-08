import React from 'react';

import Settings from './Settings';

import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.Header}>
            <span className={styles.Logo}>Logo</span>
            <Settings />
        </div>
    );
}

export default Header;
