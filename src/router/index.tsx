import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader';

const Router: React.FC = () => {
  // @ts-ignore
  const routes = __ROUTES__;

  return (
    <Routes>
      <Route path='/' element={Loader('index.page.tsx')}/>
      {Object.entries(routes).map(([path, elementPath]) => {
        return (
          <Route path={path} key={path} element={Loader(elementPath as string)}/>
        )
      })}
    </Routes>
  );
}

export default Router;