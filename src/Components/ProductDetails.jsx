import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../scripts/data';
import carContainer from '../scripts/carContainer';
import { ImageSlider } from './ImageSlider';


export const ProductDetails = () => {

  const [item,setItem] = useState({});
  const [images,setImages] = useState([]);

  const { id } = useParams();

  function AddItemToCar (item){
    carContainer.AddItem(item)
}

  useEffect(()=>{
    data.forEach(element => {
      
        if(element.id == id){
          setItem(element);
          setImages(element.images)
        }
        
    });

  },[item])


  let styles = {
    main : 'w-[95%] min-h-[84vh] p-5 md:p-8 bg-primary-200 rounded-[2rem] overflow-auto',
    grid : 'grid md:grid-cols-2 ',
    gridLeft: 'flex flex-col gap-5 xl:px-5',
    article: 'flex flex-col gap-5 size-full',
    title: 'text-2xl md:text-3xl text-black font-bold col-span-2',

    detailBox: {
      main: 'flex flex-col size-full gap-5 py-5 sm:px-4 md:px-8',
      title: 'text-2xl font-bold text-primary-400',
      p   : 'font-light',
      ul  : 'bg-gradient-to-br from-primary-100 gap-2 to-primary-400 rounded-xl px-2 py-5 sm:py-0 overflow-auto',
      li  : 'w-full flex border-b px-2 py-1 border-gray-300 text-white items-center',
      liTitle: 'text-sm md:text-md font-bold w-full',
      liTxt: 'text-end text-sm md:text-md w-full'

    },

    payBox : {
      main: 'flex flex-col xl:mt-10 items-start gap-10 xl:gap-20',
      btn : 'bg-primary-400 hover:bg-primary-100 hover:text-primary-400 text-primary-200 px-10 py-2 text-2xl rounded-full',
      txt : 'text-3xl font-bold text-primary-100'
    }

  }

  item.details == '' ? styles.detailBox.ul+= ' max-h-[600px]' : styles.detailBox.ul+= ' max-h-[500px]'

  return (
    <section className={styles.main}>
      {
        item &&
          <article className={styles.article}>
            <h2 className={styles.title}>
              {
                item.name
              }
            </h2>

            <div className={styles.grid}>
              <div className={styles.gridLeft}>
                {
                  item && <ImageSlider imgs={images} name={item.name} />
                }

                <div className={styles.payBox.main}>

                  <span className={styles.payBox.txt}>
                    <h4>
                      ${item.price}
                    </h4>
                  </span>

                  <button
                    className={styles.payBox.btn}
                    onClick={()=>AddItemToCar(item)}
                  >
                    AGREGAR AL CARRITO
                  </button>
                </div>

              </div>

              <div className={styles.detailBox.main}>
                {
                  item.details != '' ? 
                  <p className={styles.detailBox.p}>
                  {item.details}
                  </p> : ''
                }

                <h3 className={styles.detailBox.title}>
                  Caracteristicas
                </h3>

                <ul className={styles.detailBox.ul}>
                  <li className={styles.detailBox.li}>
                    <h5 className={styles.detailBox.liTitle}>
                      MARCA
                    </h5>

                    <h5 className={styles.detailBox.liTxt}>
                      {item.brand}
                    </h5>
                  </li>

                  <ul className=''>
                    {
                      item.features && item.features.map((feature, index) => {
                        return (
                          <li className={styles.detailBox.li}
                            key={index}
                          >
                            <h5 className={styles.detailBox.liTitle}>
                              {feature.name}
                            </h5>

                            <h5 className={styles.detailBox.liTxt}>
                              {feature.value}
                            </h5>
                          </li>
                        )
                      })
                    }
                  </ul>

                </ul>

              </div>
            </div>
          </article>
      }
    </section>
  )
}
