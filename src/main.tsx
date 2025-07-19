import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';   // ← ★ New!
import { MantineProvider } from '@mantine/core';

import App from './App';
import './index.css';
import '@mantine/core/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* アプリ全体を「URL を監視する袋」で包む */}
    <BrowserRouter>
      {/* Mantine のテーマラッパーはその内側で OK */}
      <MantineProvider>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);