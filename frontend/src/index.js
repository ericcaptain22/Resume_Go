import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Optional: Add global styles if needed

// Select the root element where React will mount the application
const rootElement = document.getElementById('root');

// Create a root for React (React 18+)
const root = ReactDOM.createRoot(rootElement);

// Render the main App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


