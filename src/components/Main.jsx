import React from 'react';

import Details from './Details';

import styles from './Main.module.css'

function Main() {
    return (
        <div className={styles.Main}>
            <h1 className={styles.Title}>Cave Fever</h1>

            <Details>
                <Details.Row title="Website">
                    <a href="https://restlessboat-games.itch.io/cave-fever">
                        https://restlessboat-games.itch.io/cave-fever
                    </a>
                </Details.Row>
                <Details.Row title="Release Date">
                    February 26, 2022
                </Details.Row>
                <Details.Row title="Gameplay Mode">
                    Online Multiplayer
                </Details.Row>
                <Details.Row title="Price">
                    $5.99
                </Details.Row>
                <Details.Row title="Expected Revenue">
                    $100,000.00
                </Details.Row>
                <Details.Row title="Auditory">
                    2,301
                </Details.Row>
                <Details.Row title="Bundle Size">
                    1.2MB
                </Details.Row>
                <Details.Row title="Average Session">
                    1:22
                </Details.Row>
                <Details.Row title="Last Update">
                    2 days ago
                </Details.Row>
            </Details>
        </div>
    );
}

export default Main;
