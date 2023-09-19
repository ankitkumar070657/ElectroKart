import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/productcontext'
import { CartProvider } from './context/cartcontext'
import { FilterProvider } from './context/filtercontext'
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-allen-rio-77.us.auth0.com"
    clientId="VRuLXAbR7t7kcXU5X3qhvoYuHz9IY1J8"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <AppProvider>
  <FilterProvider>
  <CartProvider>
    <App />
    </CartProvider>
    </FilterProvider>
    </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
