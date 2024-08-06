import React, { useEffect, useState }from 'react'
import { Product } from './Product'
import './Scroll.css'
import carContainer from '../scripts/carContainer'
import data from '../scripts/data'
import { useParams } from 'react-router-dom'

export const ProductList = () => {

  const [products,setProducts] = useState(data);

  const { id } = useParams();

  function AddItemToCar (item){
      carContainer.AddItem(item)
  }

  const styles = {
    main : 'w-[94%] sm:w-full min-h-[80vh] max-h-[800px] flex flex-col bg-primary-200 rounded-[2rem] p-5 z-20',
    title: 'mb-10 text-2xl font-bold text-primary-100',

    ul : 'list w-full pb-5 place-items-center grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-center sm:items-start self-center gap-x-4 gap-y-8 md:gap-5 overflow-auto ',
    li : 'w-[160px] h-[240px] sm:h-[280px] sm:w-[180px] md:w-[200px] md:h-[320px] lg:w-[250px]'

  }

  useEffect(()=>{
    if(id == 'all' ){
      setProducts(data);
    } else if(id) {
      const dataFilter = data.filter((items)=> items.category == id);
      setProducts(dataFilter);
    } else {
      setProducts(data);
    }
  },[id])

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>
        Todos los productos
      </h2>
    {/*Filtrar */}

      <ul className={styles.ul}>
        {
          products.length >= 1 ?
          products.map((item,index)=>{
            return(
              <li
              className={styles.li}
              key={index}
            >
              <Product item={item} add={AddItemToCar}/>
            </li>
            )
          })
          :
          <h2 className='text-2xl w-full sm:ml-32 font-bold text-primary-100'>
            Actualmente no tenemos productos en esta categoria.
          </h2>
        }
      </ul>
    </div>
  )
}
