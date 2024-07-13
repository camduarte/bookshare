import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='*' element={<h1>Error404</h1>} />
    </Routes>
  );
};
