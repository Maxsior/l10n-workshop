import React, {useState, useEffect, useCallback } from 'react';

import WrapperInject from './components/WrapperInject';

import {IntlProvider} from 'react-intl';
import en from './locales/en.json';
import ru from './locales/ru.json';
import ar from './locales/ar.json';


function App() {
    const locales = {en, ru, ar};

    const languages = Object.keys(locales).map((code) => ({
      code,
      name: locales[code].language
  }));

    const [currentLocale, setCurrentLocale] = useState('');

    useEffect(() => {
        setCurrentLocale(window.navigator.language);
    }, []);

    const handleChange = useCallback(
      ({target: {value}}) => {
        setCurrentLocale(value);
    }, []);

    return (
        <IntlProvider
            defaultLocale={'en'}
            locale={currentLocale}
            messages={locales[currentLocale]}
        >
            <WrapperInject
                handleChange={handleChange}
                currentLocale={currentLocale}
                languages={languages}
            />
        </IntlProvider>
 
    );
}

export default App;
