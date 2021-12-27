import React from 'react';

import Settings from './Settings';

import { FormattedMessage } from 'react-intl';

import styles from './Header.module.css'


function Header({currentLocale, handleChange, languages}) {
    return (
        <div className={styles.Header}>
            <span className={styles.Logo}>Logo</span>
            <div className='switcher'>
                <FormattedMessage
                    id="selector.language"
                    defaultMessage="language"
                    values={'language'}
                />
                <select
                    value={currentLocale}
                    onChange={handleChange}
                    >
                    {languages.map(({name, code}) => (
                        <option key={code} value={code}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
            <Settings/>
        </div>
    );
}

export default Header;
