import React, { useState } from 'react';
import Routes from './Routes';

import { checkAuthenticated } from './utils/auth';

const App = () => {

  let currentAuthFlag = checkAuthenticated();
  const [isAuthenticated, setAuthenticated] = useState(currentAuthFlag)

  const updateAuthentication = (flag) => {
    setAuthenticated(flag);
  }

  const routeProps = {
    isAuthenticated,
    updateAuthentication
  };



  return (
    <div className={`App-Container`}>
      <Routes childProps={routeProps} />
    </div>
  )
};

export default App;