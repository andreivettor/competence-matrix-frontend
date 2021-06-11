import React, { lazy, Suspense } from 'react';

const LazyEmployeeRow = lazy(() => import('./EmployeeRow'));

const EmployeeRow = props => (
  <Suspense fallback={null}>
    <LazyEmployeeRow {...props} />
  </Suspense>
);

export default EmployeeRow;
