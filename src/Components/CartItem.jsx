import React from 'react'


export const CartItem = ({item,Delete,id,quanty=1}) => {

    const styles = {
        article : 'bg-primary-200 p-2 rounded-lg shadow text-primary-100 hover:bg-primary-100 hover:text-primary-200 duration-300',
        ul : ' flex flex-wrap justify-between sm:grid grid-cols-6 rounded-lg',
        li : 'size-full max-w-[100px] flex flex-col items-center justify-center',
        imageWraper: 'size-[60px] shadow shadow-shadow-100 bg-white p-2 flex items-center rounded-lg overflow-hidden',
        image: 'size-full object-contain',
        topTxt : 'text-sm font-light',
        bottomTxt: 'text-lg font-bold truncate max-w-full',
        btnDeleteItem: '',
    }

    const trashIcon = <i className="bi bi-trash text-xl"></i>

        return (
            <div>
                <article className={styles.article}>
                    <ul className={styles.ul}>
                          <li className={styles.li}>
                              <picture className={styles.imageWraper}>
                                  <img
                                      className={styles.image}
                                      src={item.images[0]}
                                      alt={item.name}
                                  />
                              </picture>
                          </li>
        
                        <li className={styles.li}>
                            <h5 className={styles.topTxt}>
                                Nombre
                            </h5>
                            <h2 className={styles.bottomTxt}>
                                {item.name}
                            </h2>
                        </li>
        
                        <li className={styles.li}>
                            <h5 className={styles.topTxt}>
                                Cantidad
                            </h5>
        
                            <h2 className={styles.bottomTxt}>
                                {quanty}
                            </h2>
                        </li>
        
                        <li className={styles.li}>
                            <h5 className={styles.topTxt}>
                                Precio
                            </h5>
        
                            <h2 className={styles.bottomTxt}>
                                ${item.price}
                            </h2>
                        </li>
        
                        <li className={styles.li}>
                            <h5 className={styles.topTxt}>
                                Subtotal
                            </h5>
        
                            <h2 className={styles.bottomTxt}>
                                ${item.price}
                            </h2>
                        </li>
        
                        <li className={styles.li}>
                            <button 
                                onClick={()=>Delete(id)}
                                className={styles.btnDeleteItem}
                            >
                                {trashIcon}
                            </button>
                        </li>
                    </ul>
                </article>
            </div>
          )
}
