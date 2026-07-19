import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CohortDetails from '../CohortDetails';
import { CohortData } from '../Cohort';

describe('Cohort Details Component', () => {
  // Test 1: should create the component
  test('should create the component', () => {
    render(<CohortDetails cohorts={CohortData} />);
    const heading = screen.getByText('Cohort Dashboard');
    expect(heading).toBeInTheDocument();
  });

  // Test 2: should initialize the props
  test('should initialize the props', () => {
    const testCohort = [CohortData[0]];
    render(<CohortDetails cohorts={testCohort} />);
    const cohortCode = screen.getByText('REACT-2026-01');
    expect(cohortCode).toBeInTheDocument();
  });

  // Test 3: should display cohort code in h3
  test('should display cohort code in h3', () => {
    const testCohort = [CohortData[1]];
    render(<CohortDetails cohorts={testCohort} />);
    const h3Element = screen.getByRole('heading', { level: 3 });
    expect(h3Element.textContent).toBe('JAVA-2025-09');
  });

  // Test 4: should always render same html (snapshot testing)
  test('should always render same html', () => {
    const { container } = render(<CohortDetails cohorts={CohortData} />);
    expect(container).toMatchSnapshot();
  });
});
