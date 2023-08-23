import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
    const [savedProducts, setSavedProducts] = useState();

    return(
        <ProductContext.Provider value={{savedProducts, setSavedProducts}}>
            {children}
        </ProductContext.Provider>
    )
}