import React from 'react';
import { CohortData } from './Cohort';

function CohortDetails({ cohorts }) {
  const data = cohorts || CohortData;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Cohort Dashboard</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {data.map(cohort => (
          <div 
            key={cohort.id}
            style={{
              width: '300px',
              display: 'inline-block',
              margin: '10px',
              padding: '10px 20px',
              border: '1px solid black',
              borderRadius: '10px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 
              style={{
                color: cohort.status === 'ongoing' ? 'green' : 'blue'
              }}
            >
              {cohort.code}
            </h3>
            <dl>
              <dt style={{ fontWeight: '500' }}>Name:</dt>
              <dd>{cohort.name}</dd>
              <dt style={{ fontWeight: '500' }}>Status:</dt>
              <dd>{cohort.status}</dd>
              <dt style={{ fontWeight: '500' }}>Start Date:</dt>
              <dd>{cohort.startDate}</dd>
              <dt style={{ fontWeight: '500' }}>End Date:</dt>
              <dd>{cohort.endDate}</dd>
              <dt style={{ fontWeight: '500' }}>Participants:</dt>
              <dd>{cohort.participants}</dd>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CohortDetails;
