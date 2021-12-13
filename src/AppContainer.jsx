import React from 'react';
import {injectIntl, useIntl} from "react-intl";

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import styles from './App.module.css';

function AppContainer({changeLanguage}) {
  const {locale} = useIntl();

  return (
    <div
      className={styles.App}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <Header changeLanguage={changeLanguage}/>
      <div className={styles.Container}>
        <Sidebar/>
        <Main/>
      </div>
    </div>
  );
}

export default injectIntl(AppContainer);
