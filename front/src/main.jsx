import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importer React Router
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Enveloppe ton application avec BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);