import React from 'react';
import { Routes } from '../constants/routes';
import { Route, Switch } from 'react-router-dom';

export const Main = () => (
  <Switch
    children={Routes.map((item, key) => (
      <Route exact path={item.path} render={(param) => <item.component data={item.props} params={param} />} key={item.key} />
    ))}
  />
);
