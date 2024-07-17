import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { FullWithLayout } from '../hocs/layouts/FullWithLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MyBooksPage from '../pages/MyBooksPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<FullWithLayout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='mis-libros' element={<MyBooksPage />} />
        <Route path='*' element={<h1>Error404</h1>} />
      </Route>
    </Routes>
  );
};
