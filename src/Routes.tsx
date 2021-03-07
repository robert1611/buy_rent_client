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
        <MainLayout>
          <HomePage />
        </MainLayout>
      </Route>
      <Route path='/about-us'>
        <MainLayout>
          <AboutUsPage />
        </MainLayout>
      </Route>

      <Route path="*">
        <MainLayout>
          <NotFoundPage />
        </MainLayout>
      </Route>
    </Switch>
  );
}