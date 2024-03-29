import React, { useContext, useEffect, useState } from 'react';
import { GoToDetailsBtn, Loader } from '../Components';
import { BsGithub, BsFillTelephoneFill } from "react-icons/bs"; 
import { MdMail } from "react-icons/md";

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        await fetch('https://fakestoreapi.com/products')
        .then(res => {
            return  res.json()
        })
        .then(data => { 
            setProducts(data);
        })
    }

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


    
    return loading ? (
        <Loader />
    ) :  (
        <div>
            <div className="hero">
                <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Just Buy It!</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <a href="#product-space"><button className="btn btn-primary">START BUYING!</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='center-txt pt-10 pb-10 text-xl underline decoration-2'>Our Cataloge</h1>
            <div className='ese2'>
            <div className="ese" id='product-space'>
                {       
                products.map((e, i) => {

                    let title = e.title.split("").slice(0, 53).join("")
                    return(
                    <div className="card card-compact w-96 bg-base-100 shadow-xl supaCard mt-4 mb-10 items-center flex justify-center" id={e.id} key={i}>
                        <figure><img src={e.image} className="card-img w-[12.5rem] h-[15.5rem]" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end items-center">
                            <div  className='box-price'>${e.price}</div>
                            <GoToDetailsBtn product={e} />
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            </div>
            </div>
            <div className='mb-32'>
            <h1 className='pt-10 text-xl underline decoration-2'>Contact us</h1>
            <div className='flex pt-2 justify-center items-center h-2/5 mt-5'>
                <div className='flex'>
                    <div className='flex flex-col mr-10 justify-center items-center hover:scale-125 transition easedelay-150'>
                    <BsFillTelephoneFill size={50}/>
                    <p className='mt-3'>+19998887766</p>
                    </div>
                    <div className='flex flex-col ml-10 justify-center items-center hover:scale-125 transition ease delay-150'>
                    <MdMail size={50}/>
                    <p className='mt-3'>example@gmail.com</p>
                    </div>
                </div>
            </div>
            </div>
        </div>   
    )
}