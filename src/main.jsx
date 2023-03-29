import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import Faq from './pages/Faq'
import Header from './components/Header'
import './index.css'
import RootLayout from './layouts/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path='/' element={<RootLayout />}>
      <Route path ='/' element={<App />}/>
      <Route path='/faq' element={<Faq />}/>
    </Route>
  ))
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
