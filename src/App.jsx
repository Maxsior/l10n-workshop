import React, {useState} from 'react';

import WrapperInject from './components/WrapperInject';

import {IntlProvider} from 'react-intl';
import en from './locales/en.json';
import ru from './locales/ru.json';
import ar from './locales/ar.json';


function App() {
    const locales = {
        'en': en,
        'ru': ru,
        'ar': ar,
    }

    const [currentLocale, setCurrentLocale] = useState('en');

    const handleChange = ({target: {value}}) => {
        setCurrentLocale(value)
    }

    return (
        <IntlProvider
            defaultLocale={'en'}
            locale={currentLocale}
            messages={locales[currentLocale]}
        >
            <WrapperInject
                handleChange={handleChange}
                currentLocale={currentLocale}
            />
        </IntlProvider>
    );
}

export default App;
