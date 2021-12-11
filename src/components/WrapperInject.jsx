import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

import styles from '../App.module.css';

import {injectIntl} from 'react-intl';


function WrapperInject({intl: {locale}, currentLocale, handleChange}) {
    return (
        <div
            className={styles.App}
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
            <Header
                currentLocale={currentLocale}
                handleChange={handleChange}
            />
            <div className={styles.Container}>
                <Sidebar/>
                <Main/>
            </div>
        </div>
    );
}

export default injectIntl(WrapperInject);
