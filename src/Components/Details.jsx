import React from 'react'
import { SideBar } from '../Layout/SideBar'
import { CartShop } from './CartShop'
import { ProductDetails } from './ProductDetails'

export const Details = () => {
  return (
    <section className='w-full min-h-dvh flex flex-col sm:p-10 sm:flex-row items-center gap-5 sm:gap-0 md:items-center lg:justify-center bg-gradient-to-br from-primary-100 to-primary-400 font-nunito'>
        <SideBar/>
        <ProductDetails/>
    </section>
  )
}
