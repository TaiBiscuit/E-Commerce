import React, { useContext, useEffect, useState } from 'react';
import { useCartContext } from '../context/CartContext';

export const Cart = () => {
    const {cart, setCart} = useCartContext();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalAmount = 0
        cart.forEach(product => {
            totalAmount += product.price * product.amount
        })
        setTotal(totalAmount)
    }, []); 

    function handleDelete (product) {
        const index = cart.indexOf(product);
        let newArray = cart.slice(index, 1);
        console.log(index)
        console.log(newArray)
        setCart(newArray);
    }


    return (
        <>
        <div className='cart flex align-center flex-col justify-center items-center'>
        <h1>CARRITO</h1>
        <div className="cart-context w-1/4 h-1/4 ">
            <div className="border border-sky-500 rounded-lg overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <tbody>
                    <tr>
                        {
                        cart.map((product, i) => (
                        <div className="product" key={i}>
                            <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">{product.title}</div>
                                <div className="text-sm opacity-50">Amount: {product.amount}</div>
                                <div>${product.price * product.amount}</div>
                                </div>
                            </div>
                            </td>
                            <th>
                            <button className="btn btn-error ml-5 mb-5" onClick={(e) => { const productToDel = product; handleDelete(productToDel)}}>Delete</button>
                            </th>
                        </div>
                        ))
                        }
                        <p className='ml-5 mb-5 mt-5'>Total: {total}</p>
                        <button className="btn btn-success ml-5 mb-5">Buy!</button>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </>
    )
}
