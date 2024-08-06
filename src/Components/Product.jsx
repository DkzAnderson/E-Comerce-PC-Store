import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({item,add}) => {

    const styles = {
        main : 'size-full relative group bg-white flex flex-col rounded-xl shadow shadow-shadow-100 text-white hover:shadow-lg hover:shadow-primary-100',
        image: 'h-[150px] sm:h-52 p-3 object-contain',
        wraper:'w-full px-3 py-2 rounded-b-xl bg-gradient-to-br from-primary-100 to-primary-400 flex flex-col',
        title: 'truncate font-bold text-[12px] sm:text-md',
        price: 'leading-6 text-sm sm:text-lg font-bold',
        btn  : 'bg-white rounded-full flex justify-center gap-2 py-1 text-primary-100 hover:text-black hover:bg-gradient-to-b from-primary-300 to-primary-500 hover:tracking-wider hover:font-bold duration-300 cursor-pointer',
        details: 'absolute z-50 px-4 gap-2 rounded-t-xl cursor-pointer hidden w-full py-1 bg-secondary-100 text-black bottom-0 right-0 group-hover:flex sm:group-hover:bottom-[31%] group-hover:bottom-[37.5%] text-sm sm:text-md font-bold group-hover:right-0'
    }

  return (
    <div>
        <article className={styles.main}
            style={{transition:'all 0.5s'}}
        >
            <div className={styles.details}

            >
                <i className="bi bi-search"></i>
                <Link
                    to={`/product-detail/${item.id}`}
                >
                    MAS DETALLES
                </Link>
            </div>

            <img    
                className={styles.image}
                src={item.images[0]} 
                alt="" 
            />
            <div className={styles.wraper}>
                <h2 className={styles.title}>
                    {item.name.toUpperCase()}
                </h2>
                <h3 className={styles.price}>
                    ${item.price}
                </h3>
                <button
                    className={styles.btn}
                    onClick={()=>add(item)}
                >
                    <i className="bi bi-cart3"></i>
                    <h3>AGREGAR</h3>
                </button>
            </div>
        </article>
    </div>
  )
}
