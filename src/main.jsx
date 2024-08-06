import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Home } from './Components/Home.jsx'
import { CarShopZone } from './Components/CarShopZone.jsx'
import { Details } from './Components/Details.jsx'


const router = createHashRouter([
  {
    path:'/',
    element:<Navigate to={"/home"}/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/product-list/:id',
    element:<Home/>
  },
  {
    path:'/cartshop',
    element: <CarShopZone/>
  },
  {
    path: '/product-detail/:id',
    element: <Details/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
