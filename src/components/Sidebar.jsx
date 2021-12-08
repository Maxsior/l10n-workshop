import React from 'react';

import styles from './Sidebar.module.css';

function Sidebar() {
    return (
        <div className={styles.Sidebar}>
            <ul className={styles.NavList}>
                <li className={styles.LinkActive}>Game #1</li>
                <li className={styles.Link}>Game #2</li>
                <li className={styles.Link}>Game #3</li>
                <li className={styles.Link}>Game #4</li>
            </ul>
        </div>
    );
}

export default Sidebar;
