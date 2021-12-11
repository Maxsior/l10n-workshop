import React from 'react';

import Details from './Details';

import styles from './Main.module.css'
import {FormattedDate, FormattedNumber, FormattedRelativeTime, FormattedTime} from "react-intl";

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
          {/*February 26, 2022*/}
          <FormattedDate
            value={'February 26, 2022'}
            year="numeric"
            month="long"
            day="2-digit"
          />
        </Details.Row>
        <Details.Row title="details.gameplay_mode">
          Online Multiplayer
        </Details.Row>
        <Details.Row title="details.price">
          <FormattedNumber
            value={5.99}
            style="currency"
            currency="USD"
          />
        </Details.Row>
        <Details.Row title="details.expected_revenue">
          <FormattedNumber
            value={100_000}
            style="currency"
            currency="USD"
          />
        </Details.Row>
        <Details.Row title="details.auditory">
          <FormattedNumber value={2_301}/>
        </Details.Row>
        <Details.Row title="details.bundle_size">
          <FormattedNumber
            value={1.2}
            style="unit"
            unit="megabyte"
          />
        </Details.Row>
        <Details.Row title="details.avg_session">
          <FormattedTime
            value={new Date().setHours(1, 22)}
            hour="numeric"
            minute="numeric"
            hour12={false}
          />
        </Details.Row>
        <Details.Row title="details.last_updated">
          <FormattedRelativeTime value={-2} unit={'day'}/>
        </Details.Row>
      </Details>
    </div>
  );
}

export default Main;
