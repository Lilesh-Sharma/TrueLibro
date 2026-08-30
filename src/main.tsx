import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure any stale dark class is removed from html element
if (typeof document !== 'undefined') {
  document.documentElement.classList.remove('dark');
  localStorage.removeItem('truelibro_theme');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
