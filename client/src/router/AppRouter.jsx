import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { FullWithLayout } from '../hocs/layouts/FullWithLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MyBooksPage from '../pages/MyBooksPage';
import DetailsPage from '../pages/DetailsPage';
import AllBooksPage from '../pages/AllBooksPage';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import useAuthStore from '../store/authStore';
import { AuthLayout } from '../hocs/layouts/AuthLayout';

export const AppRouter = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <Routes>
      <Route path='/' element={<FullWithLayout />}>
        <Route index element={<Home />} />
        <Route path='/libros' element={<AllBooksPage />} />
        <Route path='/detalles/:id' element={<DetailsPage />} />
        <Route
          path='mis-libros'
          element={
            <ProtectedRoute>
              <MyBooksPage />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<h1>Error404</h1>} />
      </Route>
      <Route
        path='/auth'
        element={
          isAuthenticated() ? <Navigate to='/' replace /> : <AuthLayout />
        }
      >
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  );
};
