import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Component/Login.jsx';
import AuthContex from './Component/AuthContex.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
    
  },
  {
    path: "/app",
    element: <App></App>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthContex>
      <RouterProvider router={router} />
     </AuthContex>
  </StrictMode>,
)
