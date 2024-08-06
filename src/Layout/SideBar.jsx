import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css'


export const SideBar = () => {

    const categories = [
        'Placas Madre',
        'Tarjetas Gráficas',
        'Procesadores & Accesorios',
        'Almacenamiento',
        'Case & Fuentes',
        'Memorias Ram'
    ]

    const styles = {
        main : 'w-full h-full hidden sm:flex flex-col items-center',
        header: 'mb-14 w-[90%] py-2 px-10 text-xl text-primary-100 flex gap-2 bg-primary-200 rounded-full ',
        title: '',
        ul   : 'w-full flex flex-col gap-5 text-primary-200',
        li   : 'w-full flex gap-3 p-3 border-2 border-r-transparent border-white text-lg font-bold rounded-l-2xl hover:bg-primary-200 hover:text-primary-400 duration-300',
        active:'w-full active relative flex gap-3 p-3 bg-primary-200 text-primary-400 border-2 border-primary-200 border-r-transparent text-lg font-bold rounded-l-2xl',
        icon: 'rotate-90',
        cartNum:'bg-primary-100 text-white size-6 rounded flex items-center justify-center',
    }

    let mobile = {
        mainHeader : 'w-full h-[80px] flex flex-col sm:hidden',
        section : 'w-full flex justify-between p-4 bg-gradient-to-t from-primary-400 to-primary-100',
        logoBox : 'flex bg-primary-200 p-2 px-4 text-primary-100 text-xl rounded-full',
        logo    : '',
        menuBtn : 'rotate-180 px-2 text-2xl text-primary-200 flex items-center justify-center',
        divUl   : 'w-[65%] py-10 gap-10 h-full flex flex-col items-start pl-5 bg-gradient-to-br from-primary-400 to-primary-100',
        ul      : 'w-full flex py-5 h-full flex-col to-primary-100 gap-5',
        li      : 'w-full ',
        link    : 'flex gap-2 w-full h-full text-primary-200 border border-primary-200 border-r-transparent rounded-l-full p-2',
        active  : 'flex gap-2 w-full h-full border-y-2 bg-primary-200 text-primary-100 border border-primary-200 border-r-transparent rounded-l-full p-2',
        navBarLogoBox: 'bg-primary-200 flex gap-2 items-center justify-center px-8 py-2 rounded-full text-primary-100 text-lg',
        navBackground: 'w-full h-[100vh] left-0 top-0 absolute duration-300 z-50 bg-[#000000ba] sm:hidden'

    }

    /* Funciones para mobile */

    const [viewMenu,setViewMenu] = useState(false);

    const HandleViewMenu = ()=>{
        setViewMenu(!viewMenu)
    }

    const CloseMenu = ()=>{
        setViewMenu(false);
    }

    viewMenu ? mobile.navBackground+=' translate-x-0' : mobile.navBackground+=' -translate-x-full';

    /* Funciones para mobile */


    const iconHand = <i className="bi bi-hand-index"></i>
    const iconHandFill = <i className="bi bi-hand-index-fill"></i>
    const carShop = <i className="bi bi-cart3"></i>

    return(
        <section className='w-full sm:w-[30%]'>
            {/*Mobile */}
            <header className={mobile.mainHeader}>
                <section className={mobile.section}>
                    <div className={mobile.logoBox}>
                        <i className="bi bi-pc-display"></i>
                        <h1 className={styles.title}>
                            PC-Store
                        </h1>
                    </div>

                    <button 
                        className={mobile.menuBtn}
                        onClick={()=>HandleViewMenu()}
                    >
                        <i className="bi bi-list"></i>
                    </button>
                </section>

                <div className={mobile.navBackground}>
                    <div className={mobile.divUl}>
                        <div className='w-full flex justify-between px-5 items-center'>
                            <span className='text-xl text-primary-200'>
                                PC-Store
                            </span>
                            <button 
                                className='text-4xl text-primary-200'
                                onClick={()=>CloseMenu()}
                            >
                            <i className="bi bi-x-circle-fill"></i>
                            </button>
                        </div>

                    <ul className={mobile.ul}>

                        <li className={mobile.li}>
                            <NavLink
                                to={'/home'}
                                onClick={() => CloseMenu()}
                                className={({ isActive }) => isActive ? mobile.active : mobile.link}
                            >
                                <span className={styles.icon}>
                                    {
                                        iconHandFill
                                    }
                                </span>

                                <button className={''}>
                                    Todos los productos
                                </button>
                            </NavLink>
                        </li>

                        <li className={mobile.li}>
                            <NavLink
                                to={`/product-list/${categories[0]}`}
                                onClick={() => CloseMenu()}
                                className={({ isActive }) => isActive ? mobile.active : mobile.link}

                            >
                                <span className={styles.icon}>
                                    {
                                        iconHand
                                    }
                                </span>

                                <button className={''}>
                                    {categories[0]}
                                </button>
                            </NavLink>
                        </li>

                        <li className={mobile.li}>
                            <NavLink
                                to={`/product-list/${categories[1]}`}
                                onClick={() => CloseMenu()}
                                className={({ isActive }) => isActive ? mobile.active : mobile.link}

                            >
                                <span className={styles.icon}>
                                    {
                                        iconHand
                                    }
                                </span>

                                <button className={''}>
                                    {categories[1]}
                                </button>
                            </NavLink>
                        </li>

                        <li className={mobile.li}>
                            <NavLink
                                to={`/product-list/${categories[2]}`}
                                onClick={() => CloseMenu()}
                                className={({ isActive }) => isActive ? mobile.active : mobile.link}

                            >
                                <span className={styles.icon}>
                                    {
                                        iconHand
                                    }
                                </span>

                                <button className={''}>
                                    {categories[2]}
                                </button>
                            </NavLink>
                        </li>

                        <li className={mobile.li}>
                            <NavLink
                                to={`/product-list/${categories[3]}`}
                                onClick={() => CloseMenu()}
                                className={({ isActive }) => isActive ? mobile.active : mobile.link}

                            >
                                <span className={styles.icon}>
                                    {
                                        iconHand
                                    }
                                </span>

                                <button className={''}>
                                    {categories[3]}
                                </button>
                            </NavLink>
                        </li>

                        <li className={mobile.li}>
                            <NavLink
                                to={`/product-list/${categories[4]}`}
                                onClick={() => CloseMenu()}
                                className={({ isActive }) => isActive ? mobile.active : mobile.link}

                            >
                                <span className={styles.icon}>
                                    {
                                        iconHand
                                    }
                                </span>

                                <button className={''}>
                                    {categories[4]}
                                </button>
                            </NavLink>
                        </li>

                        <li className={mobile.li}>
                            <NavLink
                                to={`/product-list/${categories[5]}`}
                                onClick={() => CloseMenu()}
                                className={({ isActive }) => isActive ? mobile.active : mobile.link}

                            >
                                <span className={styles.icon}>
                                    {
                                        iconHand
                                    }
                                </span>

                                <button className={''}>
                                    {categories[5]}
                                </button>
                            </NavLink>
                        </li>

                        <li className={mobile.li}>
                            <NavLink
                                to={'/cartshop'}
                                onClick={() => CloseMenu()}
                                className={({ isActive }) => isActive ? mobile.active : mobile.link}
                            >
                                <span>
                                    {
                                        carShop
                                    }
                                </span>
                                <button className={styles.btn}>
                                    Carrito
                                </button>

                            </NavLink>
                        </li>

                    </ul>
                    </div>
                </div>

            </header>
            {/*Estandar */}
            <aside className={styles.main}>
                <header className={styles.header}>
                <i className="bi bi-pc-display"></i>
                    <h1 className={styles.title}>
                        PC-Store
                    </h1>
                </header>
      
                <ul className={styles.ul}>
      
                    <li>
                        <NavLink
                            to={'/product-list/all'}
                            className={({ isActive }) => isActive ? styles.active : styles.li}
      
                        >
                            <span className={styles.icon}>
                                {
                                    iconHandFill
                                }
                            </span>
      
                            <button className={''}>
                                Todos los productos
                            </button>
                        </NavLink>
                    </li>
      
                    <li>
                        <NavLink
                            to={`/product-list/${categories[0]}`}
                            className={({ isActive }) => isActive ? styles.active : styles.li}
      
                        >
                            <span className={styles.icon}>
                                {
                                    iconHand
                                }
                            </span>
      
                            <button className={''}>
                                {categories[0]}
                            </button>
                        </NavLink>
                    </li>
      
                    <li>
                        <NavLink
                            to={`/product-list/${categories[1]}`}
                            className={({ isActive }) => isActive ? styles.active : styles.li}
      
                        >
                            <span className={styles.icon}>
                                {
                                    iconHand
                                }
                            </span>
      
                            <button className={''}>
                                {categories[1]}
                            </button>
                        </NavLink>
                    </li>
      
                    <li>
                        <NavLink
                            to={`/product-list/${categories[2]}`}
                            className={({ isActive }) => isActive ? styles.active : styles.li}
      
                        >
                            <span className={styles.icon}>
                                {
                                    iconHand
                                }
                            </span>
      
                            <button className={''}>
                                {categories[2]}
                            </button>
                        </NavLink>
                    </li>
      
                    <li>
                        <NavLink
                            to={`/product-list/${categories[3]}`}
                            className={({ isActive }) => isActive ? styles.active : styles.li}
      
                        >
                            <span className={styles.icon}>
                                {
                                    iconHand
                                }
                            </span>
      
                            <button className={''}>
                                {categories[3]}
                            </button>
                        </NavLink>
                    </li>
      
                    <li>
                        <NavLink
                            to={`/product-list/${categories[4]}`}
                            className={({ isActive }) => isActive ? styles.active : styles.li}
      
                        >
                            <span className={styles.icon}>
                                {
                                    iconHand
                                }
                            </span>
      
                            <button className={''}>
                                {categories[4]}
                            </button>
                        </NavLink>
                    </li>
      
                    <li>
                        <NavLink
                            to={`/product-list/${categories[5]}`}
                            className={({ isActive }) => isActive ? styles.active : styles.li}
      
                        >
                            <span className={styles.icon}>
                                {
                                    iconHand
                                }
                            </span>
      
                            <button className={''}>
                                {categories[5]}
                            </button>
                        </NavLink>
                    </li>
      
                    <li>
                        <NavLink
                            to={'/cartshop'}
                            className={({ isActive }) => isActive ? styles.active : styles.li}
                        >
                            <span>
                                {
                                    carShop
                                }
                            </span>
                            <button className={styles.btn}>
                                Carrito
                            </button>
      
                        </NavLink>
                    </li>
      
                </ul>
            </aside>

        </section>
    )

}
