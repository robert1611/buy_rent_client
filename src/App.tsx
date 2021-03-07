import React from 'react';
import Routes from './Routes';

const App = () => {

  const routeProps = {
    isAuthenticated: false,
  };

  return (
    <div className={`App-Container`}>
      <Routes childProps={routeProps} />
    </div>
  )
};

export default App;