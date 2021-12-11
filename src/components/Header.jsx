import React from 'react';

import Settings from './Settings';

import styles from './Header.module.css'

const languages = [
    {name: 'English', code: 'en'},
    {name: 'Русский', code: 'ru'},
    {name: 'عربي', code: 'ar'}
]

function Header({currentLocale, handleChange}) {
    return (
        <div className={styles.Header}>
            <span className={styles.Logo}>Logo</span>
            <div className='switcher'>
                language
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
