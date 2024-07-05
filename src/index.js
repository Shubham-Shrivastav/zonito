import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from "sonner";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toaster
      toastOptions={{

        classNames: {
          error: "bg-red-400",
          success: "text-green-400",
          warning: "text-yellow-400",
          info: "bg-blue-400"
        }
      }}
    />
    <App />
  </React.StrictMode>
);
reportWebVitals();
