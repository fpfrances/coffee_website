import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Define basename
const basename = '/coffee_website';

const redirectPath = sessionStorage.redirect;
if (redirectPath) {
  sessionStorage.removeItem("redirect");
  const fullRedirectPath = `${basename}${redirectPath}`;
  window.history.replaceState(null, "", fullRedirectPath);
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
