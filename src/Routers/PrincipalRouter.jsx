import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ProductList } from '../Components/ProductList'
import { CartShop } from '../Components/CartShop'
import { Home } from '../Components/Home'

import { ProductDetails } from '../Components/ProductDetails'



export const PrincipalRouter = () => {

    const style = 'flex flex-col relative sm:flex-row w-full items-center h-full gap-4 sm:gap-0 sm:p-5 xl:px-20 lg:py-10'

  return (
    <section className={style}>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigate to={'/home'}/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/product-list/:id' element={ <Home/>}/>
            <Route path='/product-detail/:id' element={<ProductDetails/>}/>
            <Route path='/cartshop' element={<CartShop/>}/>
            <Route path='*' element={
                <div>
                    <h1 className='text-4xl font-bold text-white'>
                        Error 404, página no encontrada.
                    </h1>
                </div>
            }/>
        </Routes>
    </BrowserRouter>
    </section>
  )
}
