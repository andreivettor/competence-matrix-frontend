import React from 'react';
import EmployeesView from './components/EmployeesView/EmployeesView';
import TopBar from './components/TopBar/TopBar';
import VitescoLogo from './media/logo_grey.svg';

const App = () => {
  return (
    <div>
      <TopBar logo={VitescoLogo}/>
      <EmployeesView />
    </div>
  );
}

export default App;