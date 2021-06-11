import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployeeRow from './EmployeeRow';

describe('<EmployeeRow />', () => {
  test('it should mount', () => {
    render(<EmployeeRow />);
    
    const employeeRow = screen.getByTestId('EmployeeRow');

    expect(employeeRow).toBeInTheDocument();
  });
});