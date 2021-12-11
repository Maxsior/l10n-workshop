import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from "react-intl";
import './index.css';
import App from './App';

import {locales} from "./locales";

const locale = 'ru'

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider
      locale={locale}
      messages={locales[locale]}
      defaultLocale={'en'}
    >
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
