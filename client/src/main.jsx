import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css'; // global styles, variables, etc.
import 'leaflet/dist/leaflet.css';
import { AuthProvider } from './context/AuthContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <App />
  </AuthProvider>

    </BrowserRouter>
  </React.StrictMode>
);
