import {RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import {router} from './Routes.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
)