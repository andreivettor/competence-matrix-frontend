import React, { lazy, Suspense } from 'react';

const LazyEmployeesView = lazy(() => import('./EmployeesView'));

const EmployeesView = props => (
  <Suspense fallback={null}>
    <LazyEmployeesView {...props} />
  </Suspense>
);

export default EmployeesView;
