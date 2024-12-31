import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RoutineContextProvider } from './context/routinecontext';
import { Signcontextprovider } from './context/signcontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Signcontextprovider>
      <RoutineContextProvider>
        <App />
      </RoutineContextProvider>
    </Signcontextprovider>
  </React.StrictMode>
);
