import React from 'react'

export const BuyForm = () => {

    const styles = {
        main : 'w-full flex flex-col items-center gap-5 p-8 bg-white rounded-[2rem]',
        title: 'mb-5 text-2xl font-bold text-violet-500',
        form : 'w-[80%] grid grid-cols-2 gap-4 text-white',
        txt : 'font-bold text-xl',
        formItem : 'border flex justify-between p-3 bg-violet-500 rounded-2xl',
        label: '',
        input: 'bg-transparent px-2 border-none outline-none rounded-lg',

        buyBtn: 'text-white bg-green-500 rounded-2xl text-2xl font-bold cursor-pointer'
    }

  return (
    <section className={styles.main}>

        <div>
            <h3>
                El total de su pedido es: 
            </h3>
        </div>

        <h2 className={styles.title}>
            Por favor dejanos tus datos para realizar tu pedido.
        </h2>

        <form className={styles.form}>
            <span className={styles.formItem}>
                <h4 className={styles.txt}>
                    Apellidos :
                </h4>
                <input className={styles.input} type="text" placeholder='Apellidos' required/>
            </span>

            <span className={styles.formItem}>
                <h4 className={styles.txt}>
                    Nombres :
                </h4>
                <input className={styles.input} type="text" placeholder='Nombres' required/>
            </span>

            <span className={styles.formItem}>
                <h4 className={styles.txt}>
                    Correo :
                </h4>
                <input className={styles.input} type="text" placeholder='example@gmail.com' required/>
            </span>

            <button
                type='submit'
                className={styles.buyBtn}
            >
                Realizar Compra
            </button>
        </form>
    </section>
  )
}
