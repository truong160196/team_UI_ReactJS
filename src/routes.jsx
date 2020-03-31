import React from 'react';
import HomePage from './components/App/App';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => (<HomePage />),
  },
];

export default routes;
