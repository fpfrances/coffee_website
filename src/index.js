import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const redirectPath = sessionStorage.redirect;
if (redirectPath) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirectPath);
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
