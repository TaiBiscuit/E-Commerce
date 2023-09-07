import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext, ProductContext } from '../context';
import { MainLayout } from '../layout/MainLayout';
/* import { GoToDetails, Loader } from '../components'; */

export const Details = () => {
    const params = useParams();
    const productId= params.id - 1;
    const {savedProducts, setSavedProducts} = useContext(ProductContext);
    const {itemCount, setItemCount} = useContext(CartContext);

    function getRandomNumber(){
        return Math.floor(Math.random() * 20)

    };

    const handleSaveIt = (product) =>{
        console.log(itemCount)
        product.qty = 1;
        console.log(itemCount.id)
        const isItemOnCart = itemCount.find(itemCount.id == 2);
        console.log(isItemOnCart)
        setItemCount(product)
    };
    
    return (
    <>
    <MainLayout>
        <div className="details-card-zone">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={savedProducts[productId].image} alt="Product Image" className='details-card-img'/></figure>
                <div className="card-body">
                    <h2 className="card-title">{savedProducts[productId].title}</h2>
                    <p>${savedProducts[productId].price}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => handleSaveIt(savedProducts[productId])}>Buy Now!</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="detail-card-description">
            <p>{savedProducts[productId].description}</p>
            <div className="other-products">
                <h1 className='center-txt'>Other Products!</h1>
                <div className="carousel w-full details-half">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={savedProducts[getRandomNumber()].image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                    <img src={savedProducts[getRandomNumber()].image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                    <img src={savedProducts[getRandomNumber()].image} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </MainLayout>
    </>
    )
}