import React, { useEffect, useState } from 'react'
import { CartItem } from './CartItem'
import carContainer from '../scripts/carContainer';
import { BuyForm } from './BuyForm';

export const CartShop = () => {

    const [v,setV] = useState(0);
    const [products,setProducts] = useState(carContainer.items);
    const [buyProduct,setBuyProducts] = useState(false);
    
    const DeleteItem = (index)=>{

        let arr = products;
        arr.splice(index);

        /*
        setProducts(newProducts);
        carContainer.RefreshItems(newProducts);
        */
    }

    const ClearCar = ()=>{
        setProducts([]);
        carContainer.RefreshItems([]);
    }

    const BuyItems = ()=>{
        setBuyProducts(true);
    }

    const styles = {
        main : 'w-[95%] sm:w-full min-h-[86vh] flex flex-col gap-5 p-8 bg-primary-200 rounded-[2rem]',
        title: 'mb-5 text-2xl font-bold text-primary-100',
        ul: 'flex flex-col gap-3',

        wraperBtns: 'w-full flex flex-wrap gap-4 sm:no-wrap sm:gap-0 justify-between',
        cleanCarBtn: 'py-2 px-3 bg-primary-200 shadow shadow-shadow-100 rounded-xl text-primary-100 hover:bg-primary-300 hover:text-black',
        payWraper : 'flex bg-primary-200 items-center rounded-xl overflow-hidden shadow shadow-gray-400',
        paytxtWrap: 'flex gap-5 p-2',
        payTxt    : 'text-primary-100 font-bold',
        payBtn    : 'h-full bg-primary-100 px-2 cursor-pointer text-white font-bold hover:text-black hover:bg-primary-300',

        emptyCartxt: 'text-primary-100 text-2xl flex gap-3 tracking-wider'
    }
    

    useEffect(() => {
        if(products.length>= 1){
            let res = 0;
            products.forEach(element => {
                res += Number(element.price);
            });
    
            setV((res).toFixed(2));
        }
    }, [products])

    if (products.length >= 1 && buyProduct === false) {
        return (
            <section className={styles.main}>
                <h2 className={styles.title}>
                    Carrito
                </h2>

                <ul className={styles.ul}>
                    {
                        products.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                >
                                    <CartItem item={item} Delete={DeleteItem} id={index}/>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className={styles.wraperBtns}>
                    <button
                        className={styles.cleanCarBtn}
                        onClick={()=>ClearCar()}
                    >
                        VACIAR CARRITO
                    </button>

                    <span className={styles.payWraper}>
                        <div className={styles.paytxtWrap}>
                            <h2 className={styles.payTxt}>
                                Total :
                            </h2>
                            <h2 className={styles.payTxt}>
                                ${v}
                            </h2>
                        </div>

                        <button 
                            className={styles.payBtn}
                            onClick={()=>BuyItems()}
                        >
                            COMPRAR AHORA
                        </button>
                    </span>
                </div>
            </section>
        )
    } else if(buyProduct){
        return(
            <BuyForm/>
        )
    } else {
        return (
            <section className={styles.main}>
                <h2 className={styles.title}>
                    Carrito
                </h2>

                <h4 className={styles.emptyCartxt}>
                    Tu Carrito está vacío.
                    <i className="bi bi-emoji-frown-fill"></i>
                </h4>
            </section>
        )
    }
}
