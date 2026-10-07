import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import App from './prob1/App.jsx';
// import App from './prob2/App.jsx';
// import App from './prob3/App.jsx';
// import App from './prob4/App.jsx';
import App from './prob5/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);