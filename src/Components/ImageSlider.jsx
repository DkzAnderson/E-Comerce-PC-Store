import React, { useEffect, useState } from 'react'

export const ImageSlider = ({imgs, name}) => {

    const [images,setImages] = useState([])
    const [imgSelected,setImgSelected] = useState(0);

    const HandleNextImg = ()=>{
        if(imgSelected >= (images.length - 1)){
            setImgSelected(0)
        } else {
            setImgSelected(imgSelected + 1)
        }
        
    }

    const HandleAfterImg = ()=>{
        if(imgSelected <= 0){
            setImgSelected(images.length - 1)
        } else {
            setImgSelected(imgSelected - 1)
        }
        
    }

    const ChangeImg = (index)=>{
        setImgSelected(index);
    }

    const styles = {
        main: 'size-full max-h-[450px] grid p-3 bg-gradient-to-br from-primary-100 to-primary-400 grid-rows-5 rounded-2xl',

        firstWrapper: {
            main : 'size-full relative p-2 row-span-4 rounded-2xl flex items-center justify-center bg-white',
            img  : 'size-full h-[300px] object-contain ',
            ul   : 'absolute flex justify-evenly items-center w-[25%] h-5 bottom-3',
            li   : 'size-4 border border-gray-400 rounded-full'
        },

        secondWrapper: {
            main : 'w-full flex py-2 justify-between overflow-hidden',
            ul   : 'w-full sm:w-[80%] justify-evenly sm:justify-center flex gap-2 items-center overflow-hidden',
            li   : 'w-14 h-full lg:w-20 bg-white flex items-center justify-center p-1 rounded-lg',
            img  : 'size-full object-contain',
            btns : 'hidden sm:block text-2xl text-white',
        }
        
    }


    useEffect(()=>{
        setImages(imgs);
    },[images])


    if(images){
        return (
            <section className={styles.main}>
                <div className={styles.firstWrapper.main}>
                    <img
                        className={styles.firstWrapper.img}
                        src={images[imgSelected]}
                        alt={`${name}-image-${imgSelected}`}
                    />
                    <ul className={styles.firstWrapper.ul}>
                       {
                        images.map((i,index)=>{

                            let focus;
                            if(imgSelected == index){
                                focus = styles.firstWrapper.li + ' bg-primary-300' 
                            } else {
                                focus = styles.firstWrapper.li
                            }

                            return(
                                <li 
                                    className={focus}
                                    key={index}
                                    onClick={()=>ChangeImg(index)}
                                ></li>
                            )
                        })
                       } 
                    </ul>
                </div>
    
                <div className={styles.secondWrapper.main}>
                    <button
                        className={styles.secondWrapper.btns}
                        onClick={() => HandleAfterImg()}
                    >
                        <i className="bi bi-caret-left-fill"></i>
                    </button>

                    <ul className={styles.secondWrapper.ul}>
                        {
                            images.map((img,index)=>{

                                let focus;
                                if(imgSelected == index){
                                    focus = styles.secondWrapper.li + ' border-4 border-primary-300'
                                } else {
                                    focus = styles.secondWrapper.li
                                }

                                return(
                                    <li
                                        key={index}
                                        className={focus}
                                        onClick={()=>ChangeImg(index)}
                                    >
                                        <img 
                                            className={styles.secondWrapper.img}
                                            src={img} 
                                            alt={`${name}-image-${index}`} 
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
    

                    <button
                        className={styles.secondWrapper.btns}
                        onClick={() => HandleNextImg()}
                    >
                        <i className="bi bi-caret-right-fill"></i>
                    </button>
                </div>
    
            </section>
        )
    } else {

    }
}
