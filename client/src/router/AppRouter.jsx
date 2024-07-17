import React, { useState , StyledComponents} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Select from '../components/ui/Select';
import Register from '../pages/Register';
import DeleteModal from '../components/DeleteModal';
import ArticleList from '../pages/ArticleList';
import FormModal from '../components/FormModal';


export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<FormModal/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      
      <Route path='*' element={<h1>Error404</h1>} />
    </Routes>
  );
};
