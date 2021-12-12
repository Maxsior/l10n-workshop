import React from 'react';

import Settings from './Settings';

import styles from './Header.module.css'

function Header({changeLanguage}) {
    return (
        <div className={styles.Header}>
            <span className={styles.Logo}>Logo</span>
            <Settings changeLanguage={changeLanguage}/>
        </div>
    );
}

export default Header;
