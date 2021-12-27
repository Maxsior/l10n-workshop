import React from 'react';
import {
    FormattedDate,
    FormattedNumber,
    FormattedRelativeTime,
    FormattedTime,
    FormattedMessage,
} from 'react-intl';
import Details from './Details';

import styles from './Main.module.css'

function Main() {
    return (
        <div className={styles.Main}>
            <h1 className={styles.Title}>Cave Fever</h1>

            <Details>
                <Details.Row title="details.website">
                    <a href="https://restlessboat-games.itch.io/cave-fever">
                        https://restlessboat-games.itch.io/cave-fever
                    </a>
                </Details.Row>
                <Details.Row title="details.release_date">
                    <FormattedDate
                        value={new Date('February 26, 2022')}
                        year="numeric"
                        month="long"
                        day="2-digit"
                    />
                </Details.Row>
                <Details.Row title="details.gameplay_mode">
                    <FormattedMessage
                        id="details.gameplay_mode.online_multiplayer"
                        defaultMessage="online multiplayer"
                        values={'online multiplayer'}
                    />
                </Details.Row>
                <Details.Row title="details.price">
                    <FormattedNumber
                        value={5.99}
                        intlStyle="currency"
                        currency="USD"
                    />
                </Details.Row>
                <Details.Row title="details.expected_revenue">
                    <FormattedNumber
                        value={100000}
                        intlStyle="currency"
                        currency="USD"
                    />
                </Details.Row>
                <Details.Row title="details.auditory">
                    <FormattedNumber
                        value={2_301}
                    />
                </Details.Row>
                <Details.Row title="details.bundle_size">
                    <FormattedNumber
                        value={1.2}
                        intlStyle="unit"
                        unit="megabyte"
                    />
                </Details.Row>
                <Details.Row title="details.avg_session">
                    <FormattedTime
                        value={new Date(82000)}
                        minute="numeric"
                        second='numeric'
                    />
                </Details.Row>
                <Details.Row title="details.last_updated">
                    <FormattedRelativeTime
                        value={-2}
                        unit="day"
                    />
                </Details.Row>
            </Details>
        </div>
    );
}

export default Main;
