import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import styles from './App.module.css';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <div className={styles.Container}>
                <Sidebar />
                <Main />
            </div>
        </div>
    );
}

export default App;
