import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context';
import { MainLayout } from '../layout/MainLayout';
/* import { GoToDetails, Loader } from '../components'; */

export const Details = () => {
    const params = useParams();
    const productId= params.id - 1;
    const [loading, setLoading] = useState(false);
    const [randomNumber, setRandomNumber] = useState([]);
    const {savedProducts, setSavedProducts} = useContext(ProductContext);


    useEffect(() => {
        try{
            setLoading(true)
            const randomNumbers = createRandomNumbers()
            setRandomNumber(randomNumbers)
            .finally(() => {
                setLoading(false)
            })
        } catch(err) {
            setLoading(false);
        }
    }, [])


    function createRandomNumbers(){
        let randomNumbers= [];
        for(let i = 0; i < 5; i++){
            randomNumbers.push(Math.floor(Math.random() * 22) + 1);
        }
        return randomNumbers

    }
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
                            <button className="btn btn-primary">Buy Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail-card-description">
                    <p>{savedProducts[productId].description}</p>
                    <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                </div>
            </MainLayout>

{/*             <div className="details-card-zone">
                <div className="upper-zone">
                    <div className="image-zone">
                    <img src={savedProducts[productId].image} alt="" />
                    </div>
                    <div className="price-and-title">
                        <h1>{savedProducts[productId].title}</h1>
                        <p>${savedProducts[productId].price}</p>
                        <button>Buy now!</button>
                    </div> 
                </div>
                <div className="description">
                    <p>{savedProducts[productId].description}</p>
                </div>
                {loading ? <Loader /> : 
                <div>
                    <h1>{console.log('aa')}</h1>
                </div>
                }
            </div> */}
            </>
    )
}