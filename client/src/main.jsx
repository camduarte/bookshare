import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/reset.css';
import './styles/globals.css';
import { Toaster } from 'sonner';
import { AppRouter } from './router/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster position='top-center' richColors />
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
