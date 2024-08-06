import React from 'react'
import { CartShop } from './CartShop'
import { SideBar } from '../Layout/SideBar'

export const CarShopZone = () => {
  return (
    <section className='w-full min-h-dvh flex flex-col items-center gap-5 md:items-center lg:justify-center bg-gradient-to-br from-primary-100 to-primary-400 font-nunito'>
        <SideBar/>
        <CartShop/>
    </section>
  )
}
