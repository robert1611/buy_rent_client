import React from 'react';
import {
  Switch,
  Route
}
from 'react-router-dom';

import HomePage from './Containers/Home';
import AboutUsPage from './Containers/AboutUs';
import NotFoundPage from './Containers/NotFound';

import MainLayout from './Containers/Layout';


export default ({childProps}) => {
  return (
    <Switch>
      <Route exact path='/'>
        <MainLayout {...childProps}>
          <HomePage {...childProps} />
        </MainLayout>
      </Route>
      <Route path='/about-us'>
        <MainLayout {...childProps}>
          <AboutUsPage  {...childProps} />
        </MainLayout>
      </Route>

      <Route path="*">
        <MainLayout {...childProps}>
          <NotFoundPage  {...childProps} />
        </MainLayout>
      </Route>
    </Switch>
  );
}