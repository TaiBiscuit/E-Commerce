import React, { useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Components';
import minusImage from '../assets/icon-minus.svg'
import plusImage from '../assets/icon-plus.svg'
import { useCartContext } from '../context/CartContext';
import { useSavedContext } from '../context/SavedContext';

export const Details = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentAmount, setCurrentAmount] = useState(0);
    const [isSaved, setIsSaved] = useState(false);
    const {cart, setCart} = useCartContext();
    const {saved, setSaved} = useSavedContext();
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
        let current = currentAmount;
        if(num == 1){
            current++;
            setCurrentAmount(current);
        } else {
            if(current == 0){
                setCurrentAmount(0);
                alert('Please select an amount bigger than 0');
            } else {
                current--;
                setCurrentAmount(current);
            }       
        }
    }

    function handleSaveItOrNot(product, wasSaved){
        
        if(wasSaved = 0){
            setSaved([...saved, product]);
            setIsSaved(true);
        } else {
            const idToRemove = product.id;
            const newArray = saved.filter((item) => item.id !== idToRemove);
            setSaved(newArray);
            setIsSaved(false);
        }
        console.log(product);
    }



    function handleAddToCart(product){
        product.amount = currentAmount; 
        const productIn = cart.find((element) => element.id == product.id);
        if(productIn){
            const prodIndex = (element) => element.id == product.id;
            const index = cart.findIndex(prodIndex);
            cart[index].amount += product.amount;
            setCart([...cart])
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
            <div className="h-screen">
                <div className="flex align-center flex-col justify-center items-center pt-10">
                    <h1 className=''>{choosenProduct.title}</h1>
                    <img src={choosenProduct.image} className='w-1/4 h-1/4'/>
                    <div>
                        <p className='mt-10 font-bold'>${choosenProduct.price}</p>
                        <div className='flex flex-col justify-center align-center min-w-[300px]'>
                            <div className="amount-btn flex justify-between w-full bg-slate-400 text-teal-200 p-2 mt-5 rounded-lg ">
                                <button onClick={(e) => { handleAmount(1)}} className=''><img src={plusImage} alt=""></img></button>
                                <p>{currentAmount}</p>
                                <button onClick={(e) => { handleAmount(0)}} className=''><img src={minusImage} alt=""></img></button>
                            </div>
                            <button className="btn btn-warning mt-5 w-full" onClick={(e) => { handleAddToCart(choosenProduct)}}>Add to cart!</button>
                            {
                                isSaved ?
                                <>
                                <button className='btn btn-error mt-5 w-full' onClick={(e) => handleSaveItOrNot(choosenProduct, 1)}>Unsave</button>
                                </>
                                :
                                <>
                                <button className='btn btn-primary mt-5 w-full' onClick={(e) => handleSaveItOrNot(choosenProduct, 0)}>Save</button>
                                </> 
                            }

                        </div>
                    </div>
                </div>
            </div>
            </> 
            )
    }
}