import React from 'react';
import { useNavigate } from 'react-router-dom';

export const GoToDetailsBtn = ({product}) => {
    const navigate = useNavigate();

    const navigateToProduct = () => {
        navigate(`/details/${product.id}`)
    }

    return(
        <button className="btn btn-primary" onClick={navigateToProduct}>Go to details!</button>
    );
}