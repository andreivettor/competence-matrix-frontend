import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployeesView from './EmployeesView';

describe('<EmployeesView />', () => {
  test('it should mount', () => {
    render(<EmployeesView />);
    
    const employeesView = screen.getByTestId('EmployeesView');

    expect(employeesView).toBeInTheDocument();
  });
});