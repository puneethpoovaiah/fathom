import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const redirectPath = sessionStorage.getItem('fathom-redirect');
if (redirectPath) {
  sessionStorage.removeItem('fathom-redirect');
  const redirectUrl = new URL(redirectPath, window.location.origin);
  window.history.replaceState(null, '', `${redirectUrl.pathname}${redirectUrl.search}${redirectUrl.hash}`);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);