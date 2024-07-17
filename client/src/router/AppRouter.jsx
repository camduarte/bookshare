import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { FullWithLayout } from '../hocs/layouts/FullWithLayout';
import Home from '../pages/Home';
import MyBooksPage from '../pages/MyBooksPage';
import DetailsPage from '../pages/DetailsPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<FullWithLayout />}>
        <Route index element={<Home />} />
        <Route path='/detalles/:id' element={<DetailsPage />} />
        <Route path='mis-libros' element={<MyBooksPage />} />
        <Route path='*' element={<h1>Error404</h1>} />
      </Route>
    </Routes>
  );
};
