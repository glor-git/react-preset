import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader';

const routes = __ROUTES__;

const Router: React.FC = () => (
  <Routes>
    {Object.entries(routes).map(([path, elementPath]) => {
      return (
        <Route path={path} key={path} element={Loader(elementPath as string)}/>
      )
    })}
  </Routes>
);

export default Router;