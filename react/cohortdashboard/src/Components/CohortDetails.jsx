import React from 'react';
import styles from '../Stylesheets/CohortDetails.module.css';

function CohortDetails({ cohorts }) {
  return (
    <div>
      <h1>Cohort Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <div key={index} className={styles.box}>
          <h3 className={cohort.status === 'ongoing' ? styles.ongoing : styles.completed}>
            {cohort.name}
          </h3>
          <dl>
            <dt>Status:</dt>
            <dd>{cohort.status}</dd>
            <dt>Start Date:</dt>
            <dd>{cohort.startDate}</dd>
            <dt>End Date:</dt>
            <dd>{cohort.endDate}</dd>
            <dt>Participants:</dt>
            <dd>{cohort.participants}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
}

export default CohortDetails;
