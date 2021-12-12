import React from 'react';
import {IntlProvider} from "react-intl";

import {locales} from "./locales";
import AppContainer from "./AppContainer";

function App() {
  const [locale, setLocale] = React.useState('ru')

  const handleChangeLanguage = (txt) => {
    setLocale(txt);
  }

  return (
    <IntlProvider
      locale={locale}
      messages={locales[locale]}
      defaultLocale={'en'}
    >
      <AppContainer changeLanguage={handleChangeLanguage}/>
    </IntlProvider>
  );
}

export default App;
