import CohortDetails from './Components/CohortDetails';

function App() {
  const cohorts = [
    { name: 'React Development', status: 'ongoing', startDate: '2026-01-01', endDate: '2026-03-31', participants: 25 },
    { name: 'Java Programming', status: 'completed', startDate: '2025-09-01', endDate: '2025-12-31', participants: 30 },
    { name: 'Cloud Computing', status: 'ongoing', startDate: '2026-02-01', endDate: '2026-05-31', participants: 20 },
    { name: 'Data Science', status: 'completed', startDate: '2025-08-01', endDate: '2025-11-30', participants: 15 }
  ];

  return (
    <div>
      <CohortDetails cohorts={cohorts} />
    </div>
  );
}

export default App;
