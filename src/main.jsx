import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import '@smastrom/react-rating/style.css'
import router from './routers/Routers'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './providers/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </AuthProvider>
      <ToastContainer />
    </React.StrictMode>
  </>
)
