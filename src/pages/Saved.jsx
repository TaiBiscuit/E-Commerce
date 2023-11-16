import React, { useContext, useEffect, useState } from 'react';
import { GoToDetailsBtn, Loader } from '../Components';
import { BsGithub, BsFillTelephoneFill } from "react-icons/bs"; 
import { MdMail } from "react-icons/md";
import { useSavedContext } from '../context/SavedContext';

export const Saved = () => {
    const [loading, setLoading] = useState(false);
    const {saved, setSaved} = useSavedContext();

    console.log(saved)
    //Loading Handler

    useEffect(() => {
       try {
        setLoading(true);
        fetchData()
        .finally(() => {
            setLoading(false)
        })
       } catch (error) {
        setLoading(false);
       }
    }, []);

    function handleSaveItOrNot(product){
        console.log(product)
        const newArray = saved.filter((item) => item.title !== product);
        setSaved(newArray);
    }
    
    return loading ? (
        <Loader />
    ) :  (
        <div>
            <h1 className='center-txt pt-10 pb-10 text-xl underline decoration-2'>Saved Products</h1>
            <div className='ese2'>
            <div className="ese" id='product-space'>
                {       
                saved.map((e, i) => {

                    let title = e.title.split("").slice(0, 53).join("")
                    return(
                    <div className="card card-compact w-96 bg-base-100 shadow-xl supaCard mt-4 mb-10 items-center flex justify-center" id={e.id} key={i}>
                        <figure><img src={e.image} className="card-img w-[12.5rem] h-[15.5rem]" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <div  className='box-price'>${e.price}</div>
                            <GoToDetailsBtn product={e} />
                            <button className='btn btn-error mt-5' onClick={(e) => handleSaveItOrNot(title, 1)}>Unsave</button>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            </div>
            </div>
        </div>   
    )
}