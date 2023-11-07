import React, { useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Components';
import minusImage from '../assets/icon-minus.svg'
import plusImage from '../assets/icon-plus.svg'
import { useCartContext } from '../context/CartContext';

export const Details = () => {
    const [products, setProducts] = useState([]);
    const [setLoading] = useState(false);
    const [currentAmount, setCurrentAmount] = useState(0);
    const {cart, setCart} = useCartContext();
    const urlParams = useParams();


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

    const fetchData = async () => {
        await fetch('https://fakestoreapi.com/products')
        .then(res => {
            return  res.json()
        })
        .then(data => { 
            setProducts(data);
        })
    }

    function handleAmount(num){
        let current = currentAmount
        if(num == 1){
            current++
            setCurrentAmount(current)
        } else {
            if(current == 0){
                setCurrentAmount(0)
            } else {
                current--
                setCurrentAmount(current)  
            }       
        }
    }

    function handleAddToCart(product){
        product.amount = currentAmount; 
        const found = cart.includes(product)
        if(found){
            console.log(cart[0])
        } else {
            setCart([...cart, product]) 
        }
    }

    if(products[urlParams.id - 1] == undefined){
        return (
            <>
            <Loader />
            </>
            )
    } else {
        const choosenProduct = products[urlParams.id - 1];
        return (
            <>
            <div className="details-card flex align-center flex-col justify-center items-center">
                <div className="container flex align-center flex-col justify-center items-center">
                    <h1 className=''>{choosenProduct.title}</h1>
                    <img src={choosenProduct.image} className='w-1/4 h-1/4'/>
                    <p className=''>${choosenProduct.price}</p>
                    <div className="amount-btn flex justify-between w-1/4 bg-slate-400 text-teal-200 p-2 mt-5 rounded-lg ">
                        <button onClick={(e) => { handleAmount(1)}} className=''><img src={plusImage} alt=""></img></button>
                        <p>{currentAmount}</p>
                        <button onClick={(e) => { handleAmount(0)}} className=''><img src={minusImage} alt=""></img></button>
                    </div>
                    <button className="btn btn-warning mt-5 w-1/4" onClick={(e) => { handleAddToCart(choosenProduct)}}>Add to cart!</button>
                </div>
            </div>
            </> 
            )
    }
}